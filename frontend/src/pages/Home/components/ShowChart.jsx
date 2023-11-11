import React from "react";
import Grid from "@mui/material/Grid";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import AddCard from "./AddCard";

export default function ShowChart() {
	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item xs={5} lg={4.8} sm={4.25}>
				<AddCard isCard={true} />
			</Grid>
			<Grid item xs={5} lg={4.8} sm={4.25}>
				<AddCard isCard={false} />
			</Grid>
			<Grid item xs={10} lg={4.8} sm={8.5}>
				<LineChart />
			</Grid>
			<Grid item xs={10} lg={4.8} sm={8.5}>
				<DonutChart />
			</Grid>
		</Grid>
	);
}
