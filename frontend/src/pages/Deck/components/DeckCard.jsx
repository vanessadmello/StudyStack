import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TableInfo from "./TableInfo";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { getDecksByUser } from "../../../service/deck.service";

export default function DeckCard() {
	const [decks, setDecks] = useState([]);

	async function getDecks() {
		getDecksByUser("")
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
					mr: 2,
					ml: 2,
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
								<Typography
									sx={{
										ml:
											window.innerWidth > 850
												? window.innerWidth > 1100
													? 6
													: 10
												: 4,
										pt: 3,
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
										state={{ deckId: `${deck.name}` }}
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
			</Grid>
		</div>
	);
}
