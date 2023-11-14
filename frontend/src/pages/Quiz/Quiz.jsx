import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "highlight.js/styles/stackoverflow-dark.css";
import "react-quill/dist/quill.snow.css";
import NavBar from "../../common/NavBar/NavBar";
import Editor from "../../common/Editor/Editor";
import Footer from "../../common/Footer/Footer";
import IconTextContainer from "./components/IconTextContainer";

export default function Quiz() {
	const [index, setIndex] = useState(0);
	const [isReview, setIsReview] = useState(true);
	const [isFinished, setIsFinished] = useState(false);
	const flipCardClick = () => {
		setIsReview(false);
	};

	const nextQuestion = () => {
		if (index + 1 === data.length) {
			setIsFinished(true);
		} else {
			console.log(data.length, index);
			setIndex(index + 1);
			setIsReview(true);
		}
	};

	const code = {
		ops: [
			{
				insert: 'var something = "java";',
			},
			{
				attributes: {
					"code-block": true,
				},
				insert: "\n",
			},

			{
				insert: '  cout << "";',
			},
			{
				attributes: {
					"code-block": true,
				},
				insert: "\n",
			},
			{
				insert: "}",
			},
			{
				attributes: {
					"code-block": true,
				},
				insert: "\n",
			},
			{
				insert: "Hey Jude don't be so sad \n",
			},
		],
	};
	const data = [
		{ question: "what is your name", answer: code },
		{ question: "what is age", answer: code },
	];

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
						value={data[index].question}
					/>
					<IconTextContainer isReview={true} />
					<Button
						sx={{
							mt: 3,
							width: window.innerWidth > 450 ? "20%" : "50%",
							height: "58px",
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
						value={data[index].question}
					/>
					<Editor isReadOnly={true} dataQuiz={data[index]} />
					<Button
						sx={{
							mt: 3,
							width: window.innerWidth > 450 ? "20%" : "30%",
							height: "58px",
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
							height: "58px",
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
