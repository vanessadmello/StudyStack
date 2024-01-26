import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pink from "@mui/material/colors/pink";
import Home from "./pages/Home/Home";
import Deck from "./pages/Deck/Deck";
import SaveCard from "./pages/SaveCard/SaveCard";
import Quiz from "./pages/Quiz/Quiz";
import ReviewCards from "./pages/ReviewCards/ReviewCards";
import Introduction from "./pages/Introduction/Introduction";
import Authentication from "./pages/Authentication/Authentication";


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
				<Route path="/" element={<Introduction />} />
				<Route
					path="/login"
					element={<Authentication isLogin={true} />}
				/>
				<Route
					path="/register"
					element={<Authentication isLogin={false} />}
				/>
				<Route path="/home" element={<Home />} />
				<Route path="/decks" element={<Deck />} />
				<Route path="/addCard" element={<SaveCard isEdit={false} />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/review" element={<ReviewCards />} />
				<Route path="/viewCard" element={<SaveCard isEdit={true} />} />

			</Routes>
		</ThemeProvider>
	);
}

export default App;
