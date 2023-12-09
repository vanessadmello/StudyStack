import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableInfo from "./TableInfo";
import DeckDialog from "../../../common/DeckDialog/DeckDialog";
import { getDecksByUser } from "../../../service/deck.service";

export default function DeckCard() {
	const [decks, setDecks] = useState([]);
	const [dialogState, setDialogState] = useState({
		data: {
			userId: localStorage.getItem("userId"),
		},
		isEdit: false,
		state: false,
	});
	const [snackBar, setSnackBar] = React.useState({
		severity: "success",
		open: false,
		message: "",
	});

	const handleClose = async () => {
		setSnackBar({ ...snackBar, open: false });
		await getDecks();
	};

	async function getDecks() {
		getDecksByUser(localStorage.getItem("userId"))
			.then((res) => {
				setDecks(res.data);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getDecks();
	}, []);

	return (
		<div>
			<Grid
				container
				spacing={window.innerWidth > 850 ? 3.5 : 2}
				sx={{
					mx: 2,
					mb: 3,
					display: { xs: "flex" },
				}}
			>
				{decks.map((deck) => (
					<Grid
						item
						md={5.6}
						xs={10}
						sm={5.6}
						lg={3.8}
						key={deck._id}
					>
						<Paper
							elevation={3}
							square={false}
							sx={{ mb: 3, border: `2.5px solid ${pink[400]}` }}
						>
							<div>
								<Grid container justifyContent="flex-end">
									<IconButton
										edge="start"
										aria-label="edit"
										value={deck}
										onClick={() => {
											setDialogState({
												data: deck,
												isEdit: true,
												state: true,
											});
										}}
									>
										<EditIcon
											style={{ color: pink[300] }}
										/>
									</IconButton>
									<IconButton
										edge="start"
										aria-label="delete"
										value={deck}
										onClick={() => {
											setDialogState({
												data: deck,
												isEdit: false,
												state: true,
											});
										}}
									>
										<DeleteIcon
											style={{ color: pink[300] }}
										/>
									</IconButton>
								</Grid>
								<Typography
									sx={{
										ml: 2,
										fontSize: 20,
										textAlign: "center",
									}}
								>
									{deck.name}
								</Typography>
								<TableInfo props={deck} />

								<Stack
									spacing={3}
									direction="row"
									sx={{
										ml: window.innerWidth > 850 ? 12 : 5.2,
										pb: 3,
									}}
								>
									<Link
										to={"/quiz"}
										state={{ deckId: `${deck._id}` }}
									>
										<Button variant="outlined">
											<QuizIcon sx={{ mr: 1.3 }} />
											Quiz
										</Button>
									</Link>
									<Link
										to={"/review"}
										state={{
											deckId: `${deck._id}`,
											name: `${deck.name}`,
										}}
									>
										<Button variant="contained">
											<FactCheckIcon sx={{ mr: 1.3 }} />
											Review
										</Button>
									</Link>
								</Stack>
							</div>
						</Paper>
					</Grid>
				))}
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
			</Grid>
		</div>
	);
}
