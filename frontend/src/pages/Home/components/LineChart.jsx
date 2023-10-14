import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Paper, Card } from "@mui/material";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			labels: {
				font: {
					size: window.innerWidth > 450 ? 16 : 12,
				},
			},
		},
		title: {
			display: true,
			text: "Your Analysis Last Week",
			font: {
				size: window.innerWidth > 450 ? 17 : 15,
			},
		},
	},
	maintainAspectRatio: false,
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
	labels,
	datasets: [
		{
			label: "Incorrect",
			data: [10, 20, 30, 20, 20, 30],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Correct",
			data: [0, 8, 10, 30, 10, 40],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export function LineChart() {
	var height = window.innerWidth < 1200 ? "225" : "240";
	return (
		<Paper elevation={3} square={false}>
			<Card sx={{ display: "flex", border: "2px solid #ec407a", p: 2 }}>
				<Line options={options} data={data} height={height} />
			</Card>
		</Paper>
	);
}
