import React, { useEffect, useState } from "react";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
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
import { fetchProgress } from "../../../service/user.service";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
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
			text: "Your Analysis in the Past 7 Days",
			font: {
				size: window.innerWidth > 450 ? 18 : 15,
			},
		},
	},
	maintainAspectRatio: false,
};

const labels = ["6 Days Ago", "5 Days Ago", "4 Days Ago", "3 Days Ago", "2 Days Ago", "Yesterday", "Today"];

export default function LineChart() {
	const [data, setData] = useState({
		correct: [],
		incorrect: [],
	});
	useEffect(() => {
		fetchProgressData();
	}, []);

	const fetchProgressData = () => {
		fetchProgress(localStorage.getItem("userId"))
			.then((res) => {
				setData(res.data.progress);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const chart = {
		labels,
		datasets: [
			{
				label: "Incorrect",
				data: data.incorrect,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Correct",
				data: data.correct,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return (
		<Paper elevation={3} square={false}>
			<Card
				sx={{
					border: `2.5px solid ${pink[400]}`,
					p: 2,
				}}
			>
				<Line options={options} data={chart} height={240} />
			</Card>
		</Paper>
	);
}
