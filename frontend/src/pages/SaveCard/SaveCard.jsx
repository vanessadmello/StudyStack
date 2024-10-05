import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import Editor from "../../common/Editor/Editor";
import { updateCard, createCard } from "../../service/card.service";
import { getDecksByUser } from "../../service/deck.service";

export default function SaveCard({ isEdit }) {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("userId") === null) {
			navigate("/login");
		}
		getDecks();
		if (isEdit && location.state === null) {
			navigate("/decks");
		} else if (isEdit) {
			setData(location.state.data);
		}
	}, [isEdit, navigate, location]);

	const [data, setData] = useState(
		location.state != null ? location.state.data : {}
	);
	const [decks, setDecks] = useState([]);
	const [deckSelected, setDeckSelected] = useState(
		location.state != null ? data.deck[0]._id : ""
	);
	const [snackBar, setSnackBar] = useState({
		severity: "success",
		open: false,
		message: "",
	});

	const handleClose = () => {
		setSnackBar({ ...snackBar, open: false });
		if (isEdit) navigate("/decks");
		else navigate(0);
	};
	const handleChangeOnAnswer = (content, delta, source, editor) => {
		const contentJson = editor.getContents();
		setData({ ...data, answer: contentJson });
	};
	const handleDeckChange = (event) => {
		setDeckSelected(event.target.value);
	};

	const submitData = async () => {
		const card = {
			userId: localStorage.getItem("userId"),
			question: data.question,
			answer: data.answer,
			deck: [deckSelected],
		};
		if (isEdit) {
			updateCard(data._id, card)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: res.data.message + " :)",
							open: true,
						});
					} else {
						setSnackBar({
							severity: "error",
							message: "Card Could Not Be Updated :(",
							open: true,
						});
					}
				})
				.catch((err) => console.error(err));
		} else {
			createCard(card)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: "Card Successfully Created :)",
							open: true,
						});
					} else {
						setSnackBar({
							severity: "error",
							message: "Card Could Not Be Created :(",
							open: true,
						});
					}
				})
				.catch((err) => console.error(err));
		}
	};

	async function getDecks() {
		getDecksByUser(localStorage.getItem("userId"))
			.then((res) => {
				setDecks(res.data);
			})
			.catch((err) => console.error(err));
	}

	return (
		<div>
			<NavBar />
			<Container
				sx={{
					ml: "auto",
					mr: "auto",
					width: "90%",
				}}
				maxWidth={false}
			>
				<TextField
					id="outlined-basic"
					multiline
					sx={{
						mb: 2,
						width: "100%",
					}}
					label="Enter the Question"
					variant="outlined"
					defaultValue={data.question}
					onChange={(event) => {
						setData({ ...data, question: event.target.value });
					}}
				></TextField>

				<Editor
					answer={data.answer}
					isReadOnly={false}
					onChange={handleChangeOnAnswer}
				/>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt:
							window.innerWidth > 900
								? 8
								: window.innerWidth < 500
								? 14
								: 11,
					}}
				>
					<FormControl
						id="select-one"
						required
						sx={{
							width: window.innerWidth > 450 ? "70%" : "57%",
						}}
					>
						<InputLabel id="select-label">Deck</InputLabel>
						<Select
							labelId="select-label"
							id="select"
							value={deckSelected}
							label="Deck*"
							onChange={handleDeckChange}
						>
							{decks.map((deck) => (
								<MenuItem key={deck._id} value={deck._id}>
									{deck.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button
						sx={{
							width: window.innerWidth > 450 ? "25%" : "35%",
							height: "58px",
						}}
						variant="contained"
						onClick={submitData}
					>
						Submit
					</Button>
				</Box>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					open={snackBar.open}
					autoHideDuration={1000}
					onClose={handleClose}
				>
					<MuiAlert
						elevation={6}
						variant="filled"
						onClose={handleClose}
						severity={snackBar.severity}
						sx={{ width: "100%" }}
					>
						{snackBar.message}
					</MuiAlert>
				</Snackbar>
			</Container>
			<Footer />
		</div>
	);
}
