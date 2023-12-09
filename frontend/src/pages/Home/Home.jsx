import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar/NavBar";
import ShowChart from "./components/ShowChart";
import Footer from "../../common/Footer/Footer";

export default function Home() {
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
			{loggedIn ? <ShowChart /> : <></>}
			<Footer />
		</div>
	);
}
