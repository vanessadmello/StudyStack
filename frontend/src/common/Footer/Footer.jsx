import React from "react";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Footer() {
	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
				bgcolor: pink[400],
				py: 1,
			}}
			component="footer"
			square
		>
			<Grid
				container
				sx={{
					flexGrow: 1,
					justifyContent: "center",
				}}
			>
				<Typography variant="caption" color="white">
					© 2023 StudyStack. All Rights Reserved
				</Typography>
			</Grid>
		</Paper>
	);
}
