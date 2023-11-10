import React from "react";
import { TextField } from "@mui/material";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import Editor from "./components/Editor";

export default function SaveCard() {
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
			<Editor />
			<Footer />
		</div>
	);
}
