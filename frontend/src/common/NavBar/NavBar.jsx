import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MenuBar from "./components/MenuBar";
import Logo from "./components/Logo";

function NavBar() {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("userId") !== null) {
			setLoggedIn(true);
		}
	}, []);

	const pages = [
		{
			name: "Home",
			icon: <HomeIcon sx={{ mr: 1, pb: 0 }} />,
			path: "/home",
		},
		{
			name: "Deck",
			icon: <PostAddIcon sx={{ mr: 1, pb: 0 }} />,
			path: "/decks",
		},
	];
	return (
		<AppBar position="static" sx={{ padding: "0", marginBottom: "20px" }}>
			<Container maxWidth="false">
				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							justifyContent: "space-between",
							display: { xs: "flex", md: "none" },
						}}
					>
						{loggedIn ? (
							<MenuBar
								isSetting={false}
								loggedIn={loggedIn}
								pages={pages}
							/>
						) : (
							<div style={{ marginLeft: "3em" }} />
						)}
						<Box sx={{ mr: "auto", ml: "auto" }}>
							<Logo />
						</Box>
					</Box>

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
						}}
					>
						<Logo />
					</Box>
					<Box
						sx={{
							mr: "auto",
							ml: "auto",
							pr: 20,
							display: { xs: "none", md: "flex" },
						}}
					>
						{loggedIn &&
							pages.map((page) => (
								<Link
									to={page.path}
									key={page.name}
									style={{ textDecoration: "none" }}
								>
									<Button
										sx={{
											my: 2,
											mr: 4,
											color: "white",
											display: "block",
										}}
									>
										<Typography
											sx={{
												mr: 1,
												display: {
													xs: "none",
													md: "flex",
												},
												color: "inherit",
											}}
										>
											{page.icon}
											{page.name}
										</Typography>
									</Button>
								</Link>
							))}
					</Box>
					<MenuBar
						isSetting={true}
						loggedIn={loggedIn}
						pages={pages}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
