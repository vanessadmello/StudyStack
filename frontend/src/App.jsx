import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pink from "@mui/material/colors/pink";
import Home from "./pages/Home/Home";
import Deck from "./pages/Deck/Deck";
import SaveCard from "./pages/SaveCard/SaveCard";
import Quiz from "./pages/Quiz/Quiz";

const THEME = createTheme({
	typography: {
		fontFamily: `"Roboto Mono", monospace `,
		fontSize: 16,
		fontWeightRegular: 10,
		letterSpacing: ".5rem",
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
				<Route path="/home" element={<Home />} />
				<Route path="/decks" element={<Deck />} />
				<Route path="/addCard" element={<SaveCard />} />
				<Route path="/quiz" element={<Quiz />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
