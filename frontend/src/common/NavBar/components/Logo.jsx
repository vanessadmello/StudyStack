import React from "react";
import Typography from "@mui/material/Typography";
import LibraryAddCheckTwoToneIcon from "@mui/icons-material/LibraryAddCheckTwoTone";

export default function Logo() {
	return (
		<div style={{ display: "flex", paddingTop: "5px" }}>
			<LibraryAddCheckTwoToneIcon sx={{ mr: 1, mt: 0.5 }} />
			<Typography
				variant="h6"
				noWrap
				component="a"
				href="/"
				sx={{
					mr: 2,
					flexGrow: 1,
					fontWeight: 400,
					fontSize: window.innerWidth > 500 ? 25 : 20,
					letterSpacing: "0.15rem",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				StudyStack
			</Typography>
		</div>
	);
}
