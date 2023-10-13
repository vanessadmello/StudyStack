import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";

const pages = [
	{ name: "Home", icon: <HomeIcon sx={{ mr: 1, pb: 0 }} /> },
	{ name: "Deck", icon: <PostAddIcon sx={{ mr: 1, pb: 0 }} /> },
];
const settings = ["Account", "Logout"];

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="static"
			col
			sx={{ padding: "0", marginBottom: "15px" }}
		>
			<Container maxWidth="false">
				<Toolbar disableGutters>
					<AdbIcon
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
						FlashCard
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
					<AdbIcon
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
						FlashCard
					</Typography>
					<Box
						sx={{
							marginRight: "35%",
							display: { xs: "none", md: "flex" },
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
								onClick={handleCloseNavMenu}
								href="/"
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

					<Box sx={{ flexGrow: 0, pr: "10px" }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt="Remy Sharp"
									src="/static/images/avatar/2.jpg"
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
