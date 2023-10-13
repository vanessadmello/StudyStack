import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import { Container } from "@mui/material";

export default function Home() {
	return (
		<Container maxWidth={false} sx={{ padding: "0px" }}>
			<NavBar />
			
		</Container>
	);
}
