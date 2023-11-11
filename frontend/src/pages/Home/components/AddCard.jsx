import React from "react";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

export default function AddCard({ isCard }) {
	const styles = {
		fontSize: 40,
		color: pink[400],
	};
	
	const data = isCard
		? { text: "Add Card", icon: <AddCardIcon sx={styles} /> }
		: {
				text: "Add Deck",
				icon: <CollectionsBookmarkIcon sx={styles} />,
		  };

	return (
		<Paper elevation={3} square={false}>
			<Card
				sx={{
					border: `2.5px solid ${pink[400]}`,
					flexGrow: 1,
					textAlign: "center",
				}}
			>
				<CardActionArea component="a" href="/addCard">
					<CardContent>
						{data.icon}
						<Typography sx={{ fontSize: 16 }}>
							{data.text}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Paper>
	);
}
