import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import DeckCard from "./components/DeckCard";

export default function Deck() {
	return (
		<div>
			<NavBar />
			<DeckCard />
			<Footer />
		</div>
	);
}
