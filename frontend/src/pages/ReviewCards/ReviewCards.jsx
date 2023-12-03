import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Snackbar from "@mui/material/Snackbar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DialogDelete from "./components/DialogDelete";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import { getCardsByDeck } from "../../service/card.service";

export default function ReviewCards() {
	const navigate = useNavigate();
	const location = useLocation();
	const [cards, setCards] = useState([]);
	const [deckName, setDeckName] = useState("");
	const [message, setMessage] = useState("");
	const [open, setOpen] = React.useState(false);
	const [dialogState, setDialogState] = React.useState(false);
	
	const handleClose = () => {
		setOpen(false);
		getCards(location.state.deckId);
	};
	const openDialog = () => {
		setDialogState(true);
	};

	async function getCards(deckId) {
		getCardsByDeck(deckId)
			.then((res) => {
				var card = res.data.spaced;
				Array.prototype.push.apply(card, res.data.notSpaced);
				setCards(card);
			})
			.catch((err) => console.log(err));
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
						<Typography
							sx={{ mt: 4, mb: 2 }}
							variant="h6"
							component="div"
						>
							{deckName}
						</Typography>

						<List>
							{cards.map((card) => (
								<ListItem
									sx={{
										border: `2px solid ${pink[400]}`,
										mt: 2,
									}}
									key={card._id}
								>
									<ListItemText primary={card.question} />
									<Link
										to={"/viewCard"}
										state={{ data: card }}
									>
										<IconButton
											edge="end"
											aria-label="delete"
										>
											<EditIcon />
										</IconButton>
									</Link>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={openDialog}
									>
										<DeleteIcon />
									</IconButton>
									<DialogDelete
										dialogState={dialogState}
										setDialogState={setDialogState}
										value={card}
										setMessage={setMessage}
										setOpen={setOpen}
									/>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
				<Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={handleClose}
					message={message}
				/>
			</Container>
			<Footer />
		</div>
	);
}
