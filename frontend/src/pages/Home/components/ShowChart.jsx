import React from "react";
import Grid from "@mui/material/Grid";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import AddCard from "./AddCard";

export default function ShowChart() {
	return (
		<div>
			<Grid
				container
				spacing={2}
				sx={{
					mr: 2,
					ml: 2,
					display: { xs: "flex", md: "flex", sm: "none", lg: "none" },
				}}
			>
				<Grid item md={5.6} xs={5}>
					<AddCard isCard={true} />
				</Grid>
				<Grid item md={5.6} xs={5}>
					<AddCard isCard={false} />
				</Grid>
				<Grid item md={5.6} xs={10}>
					<LineChart></LineChart>
				</Grid>
				<Grid item md={5.6} xs={10}>
					<DonutChart />
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				sx={{ mr: 15, ml: 15, display: { xs: "none", lg: "flex" } }}
			>
				<Grid item lg={4.8}>
					<AddCard isCard={true} />
				</Grid>
				<Grid item lg={4.8}>
					<AddCard isCard={false} />
				</Grid>
				<Grid item lg={4.8}>
					<LineChart></LineChart>
				</Grid>
				<Grid item lg={4.8}>
					<DonutChart />
				</Grid>
			</Grid>

			<Grid
				container
				spacing={2}
				sx={{
					mr: 12,
					ml: 12,
					display: { xs: "none", sm: "flex", md: "none" },
				}}
			>
				<Grid item sm={4.25}>
					<AddCard isCard={true} />
				</Grid>
				<Grid item sm={4.25}>
					<AddCard isCard={false} />
				</Grid>
				<Grid item sm={8.5}>
					<LineChart></LineChart>
				</Grid>
				<Grid item sm={8.5}>
					<DonutChart />
				</Grid>
			</Grid>
		</div>
	);
}
