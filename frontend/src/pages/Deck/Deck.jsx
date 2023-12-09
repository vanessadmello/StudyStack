import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import DeckCard from "./components/DeckCard";

export default function Deck() {
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("userId") == null) {
			navigate("/login");
		} else {
			setLoggedIn(true);
		}
	}, []);

	return (
		<div>
			<NavBar />
			{loggedIn ? <DeckCard /> : <></>}
			<Footer />
		</div>
	);
}
