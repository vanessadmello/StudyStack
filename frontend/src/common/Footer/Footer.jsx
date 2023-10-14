import React from "react";
import {
	Container,
	Paper,
	Box,
	Typography,
	Grid,
	IconButton,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
	const styleIcon = {
		"&:hover": {
			transform: "scale(1.2)",
		},
		mr: 4,
		color: "white",
	};

	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
				bgcolor: pink[400],
			}}
			component="footer"
			square
			variant="outlined"
		>
			<Grid
				container
				spacing={0.2}
				sx={{
					flexGrow: 1,
					justifyContent: "center",
					my: 3,
					display: { xs: "none", sm: "flex" },
				}}
			>
				<Typography variant="caption" color="white" textAlign="center">
					© 2023 StudyStack. All Rights Reserved
				</Typography>
				<Container
					sx={{ ml: window.innerWidth > 850 ? "37%" : "27%", mt: 1 }}
				>
					<IconButton
						disableRipple
						aria-label="Github"
						href="https://github.com/vanessadmello"
						target="_blank"
					>
						<GitHubIcon sx={styleIcon} />
					</IconButton>
					<IconButton
						disableRipple
						aria-label="Instagram"
						href="https://www.instagram.com/dmello.vanessa/"
						target="_blank"
					>
						<InstagramIcon sx={styleIcon} />
					</IconButton>
					<IconButton
						disableRipple
						aria-label="Gmail"
						href="mailto:dmello.vanessa2001@gmail.com"
					>
						<MailIcon sx={styleIcon} />
					</IconButton>
					<IconButton
						disableRipple
						aria-label="LinkedIn"
						href="https://www.linkedin.com/in/vanessa-dmello/"
						target="_blank"
					>
						<LinkedInIcon sx={styleIcon} />
					</IconButton>
					<IconButton
						disableRipple
						aria-label="Website"
						href="https://vanessadmello.github.io/"
						target="_blank"
					>
						<LanguageIcon sx={styleIcon} />
					</IconButton>
				</Container>
			</Grid>
			<Box
				sx={{
					flexGrow: 1,
					mt: 1,
					mb: 1,
					ml: 3,
					display: { sm: "none" },
					justifyContent: "center",
				}}
			>
				<Typography variant="caption" color="white" align="center">
					© 2023 StudyStack. All Rights Reserved
				</Typography>
			</Box>
		</Paper>
	);
}
