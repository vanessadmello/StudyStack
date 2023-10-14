import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import { pink } from "@mui/material/colors";
import { Paper, Card, Typography, CardContent } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

export default function AddCard({ isCard }) {
	return (
		<Paper elevation={3} square={false}>
			<Card
				sx={{
					display: "flex",
					border: "2px solid #ec407a",
					"&:hover": {
						transform: "scale(1.05)",
					},
					pl:
						window.innerWidth > 900
							? window.innerWidth > 1100
								? 30
								: 23
							: window.innerWidth > 700
							? 10
							: 2,
					pr:
						window.innerWidth > 900
							? window.innerWidth > 1100
								? 30
								: 23
							: window.innerWidth > 700
							? 10
							: 2,
				}}
			>
				{isCard ? (
					<CardContent>
						<AddCardIcon
							sx={{
								fontSize: 40,
								color: pink[400],
								pl: 2,
							}}
						/>
						<Typography sx={{ fontSize: 15 }}>Add Card</Typography>
					</CardContent>
				) : (
					<CardContent>
						<CollectionsBookmarkIcon
							sx={{
								fontSize: 40,
								color: pink[400],
								pl: 2,
							}}
						/>
						<Typography sx={{ fontSize: 15 }}>Add Deck</Typography>
					</CardContent>
				)}
			</Card>
		</Paper>
	);
}
