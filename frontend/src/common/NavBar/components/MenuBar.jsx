import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function MenuBar({ isSetting, loggedIn, pages }) {
	const settings = loggedIn
		? [
				{
					name: "Account",
					icon: <AccountCircleIcon sx={{ mr: 1, pb: 0 }} />,
					path: "/home",
				},
				{
					name: "Logout",
					icon: <LogoutIcon sx={{ mr: 1, pb: 0 }} />,
					path: "/",
				},
		  ]
		: [
				{
					name: "Login",
					icon: <LogoutIcon sx={{ mr: 1, pb: 0 }} />,
					path: "/login",
				},
		  ];

	const menuItems = isSetting
		? { icon: <SettingsIcon />, menu: settings, text: "Settings" }
		: { icon: <MenuIcon />, menu: pages, text: "Pages" };
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<div>
			<Tooltip title={`Open ${menuItems.text}`}>
				<IconButton
					onClick={handleOpenUserMenu}
					sx={{ color: "inherit" }}
				>
					{menuItems.icon}
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
				{menuItems.menu.map((menu) => (
					<Link
						to={menu.path}
						key={menu.name}
						style={{ textDecoration: "none" }}
					>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography
								sx={{ display: "flex", color: "black" }}
							>
								{menu.icon}
								{menu.name}
							</Typography>
						</MenuItem>
					</Link>
				))}
			</Menu>
		</div>
	);
}
