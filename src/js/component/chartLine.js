import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";
import { NavbarChartLine } from "./navbarChartLine";

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
					label: "Uber-Eats",
					data: [20, 33, 67, 52, 94],
					borderColor: "rgba(20,35,40,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Deliveroo",
					data: [32, 45, 12, 76, 69],
					borderColor: "rgba(0,204,188,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Just-Eat",
					data: [71, 13, 42, 87, 56],
					borderColor: "rgba(255,17,37,0.8)",
					fill: false,
					borderWidth: 3
				},
				{
					label: "Glovoo",
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
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<h1 className="text-center mb-2">Evolución</h1>
						</div>
						<div className="card-body">
							<Line
								data={chartData}
								options={{
									responsive: true,
									title: {
										text: "Ingresos medios por plataforma (en €)",
										fontColor: "#2b3800",
										fontSize: 20,
										fontFamily: "abril fatface",
										display: true
									},
									scales: {
										yAxes: [
											{
												ticks: {
													min: 0,
													max: 100,
													maxTicksLimit: 10,
													beginAtZero: true,
													fontStyle: "bold",
													fontSize: 12,
													callback: function(value, index, values) {
														return value + " €";
													}
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
												},
												ticks: {
													fontStyle: "bold",
													fontSize: 12
												}
											}
										]
									},
									legend: {
										display: true,
										labels: {
											fontColor: "#2b3800",
											fontFamily: "abril fatface",
											fontSize: 14,
											onclick: false
										},
										position: "bottom"
									},
									tooltips: {
										bodyAlign: "center",
										titleAlign: "center",
										titleFontSize: 16
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
