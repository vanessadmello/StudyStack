import React, { useState } from "react";
import { Link } from "react-router-dom";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import DeckDialog from "../../../common/DeckDialog/DeckDialog";

export default function AddCard({ isCard }) {
	const styles = {
		fontSize: 40,
		color: pink[400],
	};
	const [dialogState, setDialogState] = useState({
		data: { userId: localStorage.getItem("userId"), name: "" },
		isEdit: true,
		isCreate: true,
		state: false,
	});
	const [snackBar, setSnackBar] = React.useState({
		severity: "success",
		open: false,
		message: "",
	});
	const handleClose = async () => {
		setSnackBar({ ...snackBar, open: false });
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
				{isCard ? (
					<Link to={"/addCard"} style={{ textDecoration: "none" }}>
						<CardActionArea>
							<CardContent>
								<AddCardIcon sx={styles} />
								<Typography
									sx={{ fontSize: 16, color: "black" }}
								>
									{"Add Card"}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				) : (
					<CardActionArea
						onClick={() => {
							setDialogState({
								...dialogState,
								state: true,
							});
						}}
					>
						<CardContent>
							<CollectionsBookmarkIcon sx={styles} />
							<Typography sx={{ fontSize: 16, color: "black" }}>
								{"Add Deck"}
							</Typography>
						</CardContent>
					</CardActionArea>
				)}
			</Card>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={snackBar.open}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<MuiAlert
					elevation={6}
					variant="filled"
					onClose={handleClose}
					severity={snackBar.severity}
					sx={{ width: "100%" }}
				>
					{snackBar.message}
				</MuiAlert>
			</Snackbar>
			<DeckDialog
				dialogState={dialogState}
				setDialogState={setDialogState}
				setSnackBar={setSnackBar}
			/>
		</Paper>
	);
}
