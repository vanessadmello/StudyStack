import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
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
			<TextField
				id="outlined-basic"
				sx={{
					mx: window.innerWidth > 450 ? 5 : 3,
					mb: 2,
					width: window.innerWidth > 450 ? "90%" : "88%",
				}}
				label="Enter the Question"
				variant="outlined"
			/>
			<Editor isReadOnly={false} />
			<FormControl
				required
				sx={{
					mx: window.innerWidth > 450 ? 5 : 3,
					mt: window.innerWidth > 450 ? 8 : 11,
					width: window.innerWidth > 450 ? "65%" : "57%",
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
					ml: window.innerWidth > 900 ? 4.7 : 0,
					mt: window.innerWidth > 450 ? 8 : 11,
					width: window.innerWidth > 450 ? "20%" : "25%",
					height: "58px",
				}}
				variant="contained"
			>
				Submit
			</Button>
			<Footer />
		</div>
	);
}
