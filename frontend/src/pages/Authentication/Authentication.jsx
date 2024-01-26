import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import pink from "@mui/material/colors/pink";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import { loginUser, registerUser } from "../../service/user.service";

export default function Authentication({ isLogin }) {
	const navigate = useNavigate();
	const [snackBar, setSnackBar] = useState({
		severity: "success",
		open: false,
		message: "",
	});

	const handleClose = async () => {
		setSnackBar({ ...snackBar, open: false });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			username: event.target.email.value,
			password: event.target.password.value,
		};
		if (isLogin) {
			loginUser(data)
				.then((res) => {
					if (res.status === 200) {
						setSnackBar({
							severity: "success",
							message: "User Logged In! :)",
							open: true,
						});
						localStorage.setItem("userId", res.data._id);
						navigate("/home");
					} else {
						setSnackBar({
							severity: "error",
							message: res.data.message || res.data.errors[0].msg,
							open: true,
						});
					}
				})
				.catch((err) => {
					setSnackBar({
						severity: "error",
						message: err.message,
						open: true,
					});
				});
		} else {
			if (
				event.target.repeatPassword.value !==
				event.target.password.value
			) {
				setSnackBar({
					severity: "error",
					message: "Password Don't Match",
					open: true,
				});
			} else {
				registerUser(data)
					.then((res) => {
						if (res.status === 200) {
							setSnackBar({
								severity: "success",
								message: "User Registered :)",
								open: true,
							});
							navigate("/login");
						} else if (res.status === 409) {
							setSnackBar({
								severity: "error",
								message: "Username Exists, Select Another",
								open: true,
							});
						}
					})
					.catch((err) => {
						setSnackBar({
							severity: "error",
							message: err.message,
							open: true,
						});
					});
			}
		}
	};

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
					onSubmit={handleSubmit}
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
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
						<TextField
							margin="normal"
							required
							sx={{ width: "90%" }}
							name="repeatPassword"
							label="Repeat Password"
							type="password"
							id="repeatPassword"
						/>
					)}
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						variant="contained"
						sx={{ mt: 1, mb: 2, width: "90%" }}
					>
						{isLogin ? "Log In" : "Sign Up"}
					</Button>
					<Grid container sx={{ width: "90%" }}>
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
				</Container>
			</Box>
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
			<Footer />
		</div>
	);
}
