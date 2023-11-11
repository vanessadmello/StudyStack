import React from "react";
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

const pages = [
	{ name: "Home", icon: <HomeIcon sx={{ mr: 1, pb: 0 }} />, path: "/home" },
	{
		name: "Deck",
		icon: <PostAddIcon sx={{ mr: 1, pb: 0 }} />,
		path: "/decks",
	},
];

function NavBar() {
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
						<MenuBar isSetting={false} />
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
						{pages.map((page) => (
							<Button
								key={page.name}
								component="a"
								href={page.path}
								sx={{
									my: 2,
									mr: 4,
									color: "inherit",
									display: "block",
								}}
							>
								<Typography
									sx={{
										mr: 1,
										display: { xs: "none", md: "flex" },
										color: "inherit",
									}}
								>
									{page.icon}
									{page.name}
								</Typography>
							</Button>
						))}
					</Box>
					<MenuBar isSetting={true} />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
