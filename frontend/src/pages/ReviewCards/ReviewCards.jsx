import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DialogDelete from "./components/DialogDelete";
import Tooltip from "@mui/material/Tooltip";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import { getCardsByDeck } from "../../service/card.service";
import AddCard from "@mui/icons-material/AddCard";

export default function ReviewCards() {
	const navigate = useNavigate();
	const location = useLocation();
	const [cards, setCards] = useState([]);
	const [deckName, setDeckName] = useState("");
	const [snackBar, setSnackbar] = useState({
		severity: "success",
		open: false,
		message: "",
	});
	const [dialogState, setDialogState] = useState({
		state: false,
		data: {},
	});

	const handleClose = () => {
		getCards(location.state.deckId);
		setSnackbar({ ...snackBar, open: false });
	};

	async function getCards(deckId) {
		getCardsByDeck(deckId)
			.then((res) => {
				var card = res.data.reviewed;
				Array.prototype.push.apply(card, res.data.toReview);
				setCards(card);
			})
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		if (location.state === null) {
			navigate("/decks");
		} else {
			setDeckName(location.state.name);
			getCards(location.state.deckId);
		}
	}, [location.state, navigate]);

	return (
		<div>
			<NavBar />
			<Container sx={{ flexGrow: 1, mb: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={12} lg={12}>
						<ListItem>
							<ListItemText>
								<Typography
									sx={{ mt: 3, mb: 0 }}
									variant="h6"
									component="div"
								>
									{deckName}
								</Typography>
							</ListItemText>

							<Tooltip title="Add Card to Deck">
								<Link
									to={"/addCard"}
									
								>
									<IconButton aria-label="delete">
										<AddCard style={{ color: pink[300] }} />
									</IconButton>
								</Link>
							</Tooltip>
						</ListItem>

						<List>
							{cards.map((card) => (
								<ListItem
									sx={{
										border: `2px solid ${pink[400]}`,
										mt: 1,
									}}
									key={card._id}
								>
									<ListItemText primary={card.question} />
									<Tooltip title="Edit Card">
										<Link
											to={"/viewCard"}
											state={{ data: card }}
										>
											<IconButton
												edge="end"
												aria-label="delete"
											>
												<EditIcon
													style={{ color: pink[300] }}
												/>
											</IconButton>
										</Link>
									</Tooltip>
									<Tooltip title="Delete Card">
										<IconButton
											aria-label="delete"
											onClick={() => {
												setDialogState({
													data: card,
													state: true,
												});
											}}
										>
											<DeleteIcon
												style={{ color: pink[300] }}
											/>
										</IconButton>
									</Tooltip>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					open={snackBar.open}
					autoHideDuration={2000}
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
				<DialogDelete
					dialogState={dialogState}
					setDialogState={setDialogState}
					snackBar={snackBar}
					setSnackbar={setSnackbar}
				/>
			</Container>
			<Footer />
		</div>
	);
}
