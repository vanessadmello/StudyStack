import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import Lottie from "react-lottie";
import animationData from "../Introduction/introduction-lottie.json";

export default function Introduction() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("userId") !== null) {
			setLoggedIn(true);
		}
	}, []);

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<NavBar />
			<Grid container spacing={1} justifyContent="center" sx={{ mb: 5 }}>
				<Grid item xs={11} lg={5.5} sm={11}>
					<div>
						<Lottie
							options={lottieOptions}
							height={"80%"}
							width={"80%"}
						/>
					</div>
				</Grid>
				<Grid item xs={11} lg={5.5} sm={11}>
					<Paper
						elevation={1}
						sx={{
							p: 4,
							mt: window.innerWidth > 900 ? 11 : 0,
						}}
					>
						<Typography
							variant="h4"
							sx={{
								flexGrow: 1,
								letterSpacing: "0.15rem",
								textDecoration: "none",
							}}
						>
							Unlock Your Learning Potential
						</Typography>
						<Typography
							variant="h6"
							sx={{
								mt: 3,
								flexGrow: 1,
								letterSpacing: "0.1rem",
								textDecoration: "none",
							}}
						>
							This app makes use of spaced repetition to improve
							and help you in your studies!
						</Typography>
						<Button
							sx={{ mt: 3, height: "50px" }}
							variant="contained"
						>
							{loggedIn ? (
								<Link
									to={"/home"}
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									Go to Home
								</Link>
							) : (
								<Link
									to={"/register"}
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									Get started
								</Link>
							)}
						</Button>
					</Paper>
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
}
