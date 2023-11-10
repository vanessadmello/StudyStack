import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import ShowChart from "./components/ShowChart";
import Footer from "../../common/Footer/Footer";

export default function Home() {
	return (
		<div>
			<NavBar />
			<ShowChart />
			<Footer />
		</div>
	);
}
