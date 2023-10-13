import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { pink, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const THEME = createTheme({
	typography: {
		fontFamily: `"Roboto Mono", monospace `,
		fontSize: 16,
		fontWeightRegular: 10,
		letterSpacing: ".1rem",
	},
	palette: {
		primary: {
			main: pink[400],
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={THEME}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
