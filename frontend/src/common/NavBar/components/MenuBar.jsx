import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuBar({ isSetting, loggedIn, pages }) {
	const navigate = useNavigate();
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
					icon: <LogoutIcon sx={{ mr: 1, pb: 0 }}/>,
					path: "/login",
				},
		  ];

	const menuItems = isSetting
		? { icon: <SettingsIcon />, menu: settings, text: "Settings" }
		: { icon: <MenuIcon />, menu: pages, text: "Pages" };
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = (event) => {
		if (event.currentTarget.innerText === "Logout") {
			localStorage.clear();
			navigate("/");
			window.location.reload();
		}
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
						onClick={handleCloseUserMenu}
						value={menu.name}
					>
						<MenuItem>
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
