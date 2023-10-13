import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Settings() {
	const settings = [
		{ name: "Account", icon: <AccountCircleIcon sx={{ mr: 1, pb: 0 }} /> },
		{ name: "Logout", icon: <LogoutIcon sx={{ mr: 1, pb: 0 }} /> },
	];

	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box sx={{ flexGrow: 0, pr: "10px" }}>
			<Tooltip title="Open settings">
				<IconButton
					onClick={handleOpenUserMenu}
					sx={{ p: 0, color: "inherit" }}
				>
					<SettingsIcon />
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
					<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
						<Typography
							sx={{
								mr: 2,
								display: { xs: "flex", md: "flex" },
								color: "inherit",
							}}
						>
							{setting.icon}
							{setting.name}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
