import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";

export default function Introduction() {
	const [loggedIn, setLoggedIn] = useState(false);

	if (localStorage.getItem("userId") !== null) {
		setLoggedIn(true);
	}

	return (
		<div>
			<NavBar />
			<Grid container spacing={2} justifyContent="center" sx={{ mb: 5 }}>
				<Grid item xs={11} lg={5.5} sm={11}>
					<img
						src="/introduction.jpg"
						style={{ height: "100%", width: "100%" }}
						alt={"study"}
						loading="lazy"
					/>
				</Grid>
				<Grid item xs={11} lg={5.5} sm={11}>
					<Paper elevation={3} sx={{ height: "85%", p: 4 }}>
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
								mt: 2,
								flexGrow: 1,
								letterSpacing: "0.1rem",
								textDecoration: "none",
							}}
						>
							This website makes use of spaced repetition to
							improve and help you in you studies!
						</Typography>
						<Button
							sx={{ mt: 4, height: "50px" }}
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
