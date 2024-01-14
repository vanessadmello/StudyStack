import React, { useEffect, useState } from "react";
import pink from "@mui/material/colors/pink";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getDecksByUser } from "../../../service/deck.service";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: window.innerWidth > 450 ? "left" : "bottom",
			labels: {
				font: {
					size: window.innerWidth > 450 ? 16 : 12,
				},
			},
		},
		title: {
			display: true,
			text: "Decks Analysis",
			font: {
				size: window.innerWidth > 450 ? 18 : 15,
			},
		},
	},
	cutout: "70%",
	radius: window.innerWidth > 450 ? 85 : 60,
	maintainAspectRatio: false,
};

export default function DonutChart() {
	const [data, setData] = useState({
		labels: ["Default"],
		numberOfCards: [1],
	});
	
	useEffect(() => {
		getDeckData();
	}, []);

	const getDeckData = () => {
		getDecksByUser(localStorage.getItem("userId"))
			.then((res) => {
				setData({
					labels: res.data.map((deck) => deck.name),
					numberOfCards: res.data.map(
						(deck) => deck.reviewed + deck.toReview
					),
				});
			})
			.catch((err) => console.error(err));
	};

	const chart = {
		labels: data.labels,
		datasets: [
			{
				label: "#No. of Cards",
				data: data.numberOfCards,

				backgroundColor: [
					"rgba(255, 99, 132, 0.7)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.7)",
					"rgba(75, 192, 192, 0.7)",
					"rgba(153, 102, 255, 0.7)",
					"rgba(255, 159, 64, 0.8)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 2,
			},
		],
	};

	var style =
		window.innerWidth > 700
			? {
					border: `2.5px solid ${pink[400]}`,
					py: 2,
					pl: 5,
			  }
			: { border: `2.5px solid ${pink[400]}` };

	return (
		<Paper elevation={3} square={false}>
			<Card sx={style}>
				<Doughnut
					data={chart}
					options={options}
					height={240}
					sx={style}
				/>
			</Card>
		</Paper>
	);
}
