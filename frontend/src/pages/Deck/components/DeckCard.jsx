import React from "react";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TableInfo from "./TableInfo";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export default function DeckCard() {
	const cards = [
		{ name: "Data Structures", toReview: 50, reviewed: 25 },
		{ name: "Music Theory", toReview: 50, reviewed: 25 },
		{ name: "Music Practice", toReview: 50, reviewed: 25 },
	];

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
				{cards.map((card) => (
					<Grid
						item
						md={5.6}
						xs={10}
						sm={5.6}
						lg={3.8}
						key={card.name}
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
									{card.name}
								</Typography>
								<TableInfo props={card} />

								<Stack
									spacing={3}
									direction="row"
									sx={{
										ml: window.innerWidth > 850 ? 12 : 5.2,
										pb: 3,
									}}
								>
									<Button variant="outlined" href="/quiz">
										<QuizIcon sx={{ mr: 1.3 }} />
										Quiz
									</Button>
									<Button variant="contained">
										<FactCheckIcon sx={{ mr: 1.3 }} />
										Review
									</Button>
								</Stack>
							</div>
						</Paper>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
