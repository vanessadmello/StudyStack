import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteCard } from "../../../service/card.service";

export default function DialogDelete({
	dialogState,
	setDialogState,
	setSnackbar,
}) {
	const handleCloseDialog = () => {
		setDialogState({ ...dialogState, state: false });
	};

	const handleDeleteDialog = () => {
		setDialogState({ ...dialogState, state: false });
		deleteCard(dialogState.data._id)
			.then((res) => {
				if (res.status === 200) {
					setSnackbar({
						severity: "success",
						message: res.data.message + " :)",
						open: true,
					});
				} else {
					setSnackbar({
						severity: "error",
						message: "Card Could Not Be Deleted :(",
						open: true,
					});
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<React.Fragment>
			<Dialog
				open={dialogState.state}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle>
					{"Do you want to delete the following card?"}
				</DialogTitle>
				<DialogContent>{dialogState.data.question}</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>No</Button>
					<Button onClick={handleDeleteDialog} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
