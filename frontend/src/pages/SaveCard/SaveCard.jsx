import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import Editor from "../../common/Editor/Editor";

export default function SaveCard() {
	const [deck, setDeck] = React.useState("");

	const handleChange = (event) => {
		setDeck(event.target.value);
	};

	const decks = ["Data Structure", "Maths", "Music Theory"];
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
					sx={{
						mb: 2,
						width: "100%",
					}}
					label="Enter the Question"
					variant="outlined"
				/>

				<Editor isReadOnly={false} />
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
						required
						sx={{
							width: window.innerWidth > 450 ? "70%" : "57%",
						}}
					>
						<InputLabel id="select-label">Deck</InputLabel>
						<Select
							labelId="select-label"
							id="select"
							value={deck}
							label="Deck*"
							onChange={handleChange}
						>
							{decks.map((deck) => (
								<MenuItem value={deck}>{deck}</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button
						sx={{
							width: window.innerWidth > 450 ? "25%" : "35%",
							height: "58px",
						}}
						variant="contained"
					>
						Submit
					</Button>
				</Box>
			</Container>
			<Footer />
		</div>
	);
}
