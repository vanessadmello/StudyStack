import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import { pink } from "@mui/material/colors";

export default function Authentication({ isLogin }) {
	const handleSubmit = () => {};

	return (
		<div>
			<NavBar />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					{isLogin ? "Log In" : "Sign Up"}
				</Typography>
				<Container
					component="form"
					sx={{ mt: 1, ml: 1, flexGrow: 1, textAlign: "center" }}
				>
					<TextField
						margin="normal"
						required
						sx={{ width: "90%" }}
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						sx={{ width: "90%" }}
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{isLogin ? (
						<div></div>
					) : (
						<div>
							<TextField
								margin="normal"
								required
								sx={{ width: "90%" }}
								name="repeat-password"
								label="Repeat Password"
								type="password"
								id="repeat-password"
							/>
						</div>
					)}
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						onSubmit={handleSubmit}
						variant="contained"
						sx={{ mt: 1, mb: 2, width: "90%" }}
					>
						{isLogin ? "Log In" : "Sign Up"}
					</Button>
				</Container>
				<Grid container sx={{ width: "80%" }}>
					<Grid item xs></Grid>
					<Grid item>
						{isLogin ? (
							<Link
								to={"/register"}
								style={{
									textDecoration: "underline",
									color: pink[400],
								}}
							>
								Not Registered? Sign Up
							</Link>
						) : (
							<Link
								to={"/login"}
								style={{
									textDecoration: "underline",
									color: pink[400],
								}}
							>
								Already Registered? Log In
							</Link>
						)}
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</div>
	);
}
