import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import { Container } from "@mui/material";
import ShowChart from "./components/ShowChart";

export default function Home() {
	return (
		<Container maxWidth={false} disableGutters>
			<NavBar />
			<ShowChart />
		</Container>
	);
}
