import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createDeck, updateDeck, deleteDeck } from "../../service/deck.service";

export default function DeckDialog({
	dialogState,
	setDialogState,
	setSnackBar,
}) {
	const handleCloseDialog = () => {
		setDialogState({ ...dialogState, state: false });
	};
	const text =
		dialogState.isEdit && dialogState.isCreate
			? "Create New Deck"
			: "Do you want to edit the following deck?";

	const handleChangeDialog = () => {
		if (dialogState.isEdit && dialogState.isCreate) {
			createDeck(dialogState.data._id, dialogState.data)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: "Deck Created Successfully :)",
							open: true,
						});
					} else {
						setSnackBar({
							severity: "error",
							message: "Deck Could Not Be Deleted :(",
							open: true,
						});
					}
				})
				.catch((err) =>
					setSnackBar({
						severity: "error",
						message: err.message,
						open: true,
					})
				);
		} else if (dialogState.isEdit) {
			updateDeck(dialogState.data._id, dialogState.data)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: res.data.message + " :)",
							open: true,
						});
					} else {
						setSnackBar({
							severity: "error",
							message: "Deck Could Not Be Updated :(",
							open: true,
						});
					}
				})
				.catch((err) =>
					setSnackBar({
						severity: "error",
						message: err.message,
						open: true,
					})
				);
		} else {
			deleteDeck(dialogState.data._id)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: res.data.message + " :)",
							open: true,
						});
					} else {
						setSnackBar({
							severity: "error",
							message: "Deck Could Not Be Deleted :(",
							open: true,
						});
					}
				})
				.catch((err) =>
					setSnackBar({
						severity: "error",
						message: err.message,
						open: true,
					})
				);
		}
		setDialogState({ ...dialogState, state: false });
	};

	return (
		<React.Fragment>
			<Dialog
				open={dialogState.state}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{dialogState.isEdit ? (
					<div style={{ flexGrow: 1, textAlign: "center" }}>
						<DialogTitle>{text}</DialogTitle>
						<TextField
							id="outlined-basic"
							sx={{
								mb: 2,
								width: "90%",
							}}
							label="Name of the Deck"
							variant="outlined"
							defaultValue={dialogState.data.name}
							onChange={(event) => {
								var data = {
									...dialogState.data,
									name: event.target.value,
								};
								setDialogState({
									...dialogState,
									data: data,
								});
							}}
						/>
					</div>
				) : (
					<div>
						<DialogTitle>
							{"Do you want to delete the following deck?"}
						</DialogTitle>
						<DialogContent>{dialogState.data.name}</DialogContent>
					</div>
				)}

				<DialogActions>
					<Button onClick={handleCloseDialog}>No</Button>
					<Button onClick={handleChangeDialog} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
