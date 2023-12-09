import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "highlight.js/styles/stackoverflow-dark.css";
import "react-quill/dist/quill.snow.css";
import NavBar from "../../common/NavBar/NavBar";
import Editor from "../../common/Editor/Editor";
import Footer from "../../common/Footer/Footer";
import IconTextContainer from "./components/IconTextContainer";
import { getCardsByDeck } from "../../service/card.service";

export default function Quiz(props) {
	const navigate = useNavigate();
	const location = useLocation();

	const [cards, setCards] = useState([]);
	const [index, setIndex] = useState(0);
	const [isReview, setIsReview] = useState(true);
	const [isFinished, setIsFinished] = useState(true);

	useEffect(() => {
		getCards();
		if (location.state === null) {
			navigate("/decks");
		}
	});

	async function getCards() {
		await getCardsByDeck(location.state.deckId)
			.then(async (res) => {
				setCards(res.data.toReview);
				if (res.data.toReview.length === 0) {
					setIsFinished(true);
				} else {
					setIsFinished(false);
				}
			})
			.catch((err) => console.log(err));
	}

	const flipCardClick = () => {
		setIsReview(false);
	};

	const nextQuestion = () => {
		if (index + 1 === cards.length) {
			setIsFinished(true);
		} else {
			setIndex(index + 1);
			setIsReview(true);
		}
	};

	return (
		<div>
			<NavBar />
			{isFinished ? (
				<IconTextContainer isReview={false} />
			) : isReview ? (
				<Container
					sx={{
						ml: "auto",
						mr: "auto",
						width: "90%",
					}}
					maxWidth={false}
				>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						sx={{
							mb: 2,
							width: "100%",
						}}
						label="Question"
						id="outlined-disabled"
						value={cards[index].question}
					/>
					<IconTextContainer isReview={true} />
					<Button
						sx={{
							mt: 3,
							width: window.innerWidth > 450 ? "20%" : "50%",
							height: "48px",
						}}
						variant="contained"
						onClick={flipCardClick}
					>
						Flip Card
					</Button>
				</Container>
			) : (
				<Container
					sx={{
						ml: "auto",
						mr: "auto",
						width: "90%",
					}}
					maxWidth={false}
				>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						sx={{
							width: "100%",
							mb: 2,
						}}
						label="Question"
						id="outlined-disabled"
						value={cards[index].question}
					/>
					<Editor isReadOnly={true} answer={cards[index].answer} />
					<Button
						sx={{
							mt: 3,
							width: window.innerWidth > 450 ? "20%" : "30%",
							height: "48px",
						}}
						style={{ border: "2px solid" }}
						variant="outlined"
						onClick={nextQuestion}
					>
						Correct
					</Button>
					<Button
						sx={{
							ml: window.innerWidth > 450 ? 4.7 : 3,
							mt: 3,
							width: window.innerWidth > 450 ? "20%" : "30%",
							height: "48px",
						}}
						variant="contained"
						onClick={nextQuestion}
					>
						Wrong
					</Button>
				</Container>
			)}
			<Footer />
		</div>
	);
}
