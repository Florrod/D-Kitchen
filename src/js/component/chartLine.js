import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";

export const ChartLine = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["lunes", "martes", "miercoles", "jueves", "viernes"],
			type: "line",
			datasets: [
				{
					label: "Ingresos medios en Uber-Eats",
					data: [20, 33, 67, 52, 94],
					borderColor: "rgba(20,35,40,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Ingresos medios en Deliveroo",
					data: [32, 45, 12, 76, 69],
					borderColor: "rgba(0,204,188,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Ingresos medios en Just-Eat",
					data: [71, 13, 42, 87, 56],
					borderColor: "rgba(255,17,37,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Ingresos medios en Glovoo",
					data: [45, 31, 73, 24, 71],
					borderColor: "rgba(255,194,68,0.8)",
					fill: false,
					borderWidth: 3
				}
			]
		});
	};

	useEffect(() => {
		chart();
	}, []);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-0">Ingresos</h1>
			</div>
			<div>
				<Line
					data={chartData}
					options={{
						responsive: true,
						title: { text: "Ingresos medios", display: true },
						scales: {
							yAxes: [
								{
									ticks: {
										min: 0,
										max: 100,
										maxTicksLimit: 10,
										beginAtZero: true
									},
									gridLines: {
										display: false
									}
								}
							],
							xAxes: [
								{
									gridLines: {
										display: true
									}
								}
							]
						}
					}}
				/>
			</div>
		</div>
	);
};
