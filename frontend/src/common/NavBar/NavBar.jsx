import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryAddCheckTwoToneIcon from "@mui/icons-material/LibraryAddCheckTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Settings from "./components/Settings";

const pages = [
	{ name: "Home", icon: <HomeIcon sx={{ mr: 1, pb: 0 }} />, path: "/home" },
	{
		name: "Deck",
		icon: <PostAddIcon sx={{ mr: 1, pb: 0 }} />,
		path: "/decks",
	},
];

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			col
			sx={{ padding: "0", marginBottom: "20px" }}
		>
			<Container maxWidth="false">
				<Toolbar disableGutters>
					<LibraryAddCheckTwoToneIcon
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						StudyStack
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.name}
									component="a"
									href={page.path}
									onClick={handleCloseNavMenu}
								>
									{page.icon}
									<Typography textAlign="center">
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<LibraryAddCheckTwoToneIcon
						sx={{
							display: { xs: "flex", md: "none" },
							mr: 1,
						}}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontSize: 20,
							fontWeight: 400,
							letterSpacing: ".0.3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						StudyStack
					</Typography>
					<Box
						sx={{
							marginRight: "17%",
							display: { xs: "none", md: "flex" },
						}}
					></Box>
					<Box
						sx={{
							marginRight: "10%",
							display: { xs: "none", md: "none", lg: "flex" },
						}}
					></Box>
					<Box
						sx={{
							flexGrow: 1,
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
									mr: 5,
									color: "inherit",
									display: "block",
								}}
							>
								<Typography
									sx={{
										mr: 2,
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
					<Settings />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
