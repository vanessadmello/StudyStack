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
	value,
	setMessage,
	setOpen,
}) {
	const handleCloseDialog = () => {
		setDialogState(false);
	};

	const handleDeleteDialog = () => {
        setDialogState(false);
		deleteCard(value._id)
			.then((res) => {
				if (res.status === 200) {
					setMessage(res.data.message + " :)");
					setOpen(true);
				} else {
					setMessage("Card Could Not Be Deleted :(");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<React.Fragment>
			<Dialog
				open={dialogState}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle>
					{"Do you want to delete the following card?"}
				</DialogTitle>
				<DialogContent>{value.question}</DialogContent>
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
