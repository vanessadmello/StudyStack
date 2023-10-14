import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import { Container } from "@mui/material";
import ShowChart from "./components/ShowChart";
import Footer from "../../common/Footer/Footer";

export default function Home() {
	return (
		<Container maxWidth={false} disableGutters>
			<NavBar />
			<ShowChart />
			<Footer />
		</Container>
	);
}
