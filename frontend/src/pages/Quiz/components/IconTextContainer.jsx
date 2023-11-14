import React from "react";
import pink from "@mui/material/colors/pink";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PreviewIcon from "@mui/icons-material/Preview";

export default function IconTextContainer({ isReview }) {
	const style = {
		display: "flex",
		fontSize: 150,
		color: pink[300],
		ml: "auto",
		mr: "auto",
		my: 1,
	};

	const dataObject = [
		{
			icon: <CelebrationIcon sx={style} />,
			text: "You Have Completed All the Cards in this Deck. Congratulations!",
		},
		{
			icon: <PreviewIcon sx={style} />,
			text: "Flip Card to View the Answer",
		},
	];

	const data = isReview ? dataObject[1] : dataObject[0];

	return (
		<Container
			sx={{
				height: "270px",
				border: `2px solid ${pink[400]}`,
				ml: "auto",
				mr: "auto",
				width: isReview
					? "100%"
					: window.innerWidth > 450
					? "90%"
					: "80%",
			}}
			maxWidth={false}
		>
			<Typography
				sx={{
					flexGrow: 1,
					textAlign: "center",
					pt: "1.2em",
				}}
			>
				{data.text}
				<br />
				{data.icon}
			</Typography>
		</Container>
	);
}
