import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";

const data = [
	{ question: "What is your name", answer: "code" },
	{
		question: "Some Random",
		answer: "code",
	},
	{ question: "What is age", answer: "code" },
	{ question: "What is age2", answer: "code" },
];

export default function ReviewCards() {
	const navigate = useNavigate();
	const location = useLocation();
	const [title, setTitle] = useState("");
	useEffect(() => {
		if (location.state === null) {
			navigate("/decks");
		} else {
			setTitle(location.state.title);
		}
	}, [location.state, navigate]);

	return (
		<div>
			<NavBar />
			<Container sx={{ flexGrow: 1, mb: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={12} lg={12}>
						<Typography
							sx={{ mt: 4, mb: 2 }}
							variant="h6"
							component="div"
						>
							{title}
						</Typography>

						<List>
							{data.map((d) => (
								<ListItem
									sx={{
										border: `2px solid ${pink[400]}`,
										mt: 2,
									}}
									key={d.question}
								>
									<ListItemText primary={d.question} />
									<Link to={"/viewCard"} state={{ data: d }}>
										<IconButton
											edge="end"
											aria-label="delete"
										>
											<EditIcon />
										</IconButton>
									</Link>
									<IconButton edge="end" aria-label="delete">
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
