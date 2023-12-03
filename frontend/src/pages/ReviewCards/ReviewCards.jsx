import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import { getCardsByDeck } from "../../service/card.service";

export default function ReviewCards() {
	const navigate = useNavigate();
	const location = useLocation();
	const [cards, setCards] = useState([]);
	const [deckName, setDeckName] = useState("");
	
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
									<IconButton edge="end" aria-label="delete">
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
