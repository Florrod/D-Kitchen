import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";

const ENDPOINT = "https://3000-afee9549-6454-4158-a803-5e3e769585c3.ws-eu01.gitpod.io";

export const ChartLine = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		const getSalesGraph = period => {
			let access_token = localStorage.getItem("access_token");
			return fetch(`${ENDPOINT}/test`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${access_token}`,
					"Access-Control-Allow-Origin": "*"
				}
			})
				.then(res => res.json())
				.then(sales => {
					// setSales(sales)
					const totalYear = sales.reduce((total, current) => {
						return total + current[4];
					}, 0);
					let byMonth = {};
					let byDay = {};
					let platformsLabels = {};
					let platformsMonths = {};
					let platformsYear = {};
					let platformsDays = {};
					sales.forEach(sale => {
						platformsLabels[sale[0]] = "#" + Math.floor(Math.random() * 16777215).toString(16);
						platformsMonths[sale[2]] = "Enero";
						platformsYear[sale[3]] = "2019";
						platformsDays[sale[1]] = "Lunes";
						if (sale[3] == new Date().getFullYear()) {
							if (byMonth[sale[0]] === undefined) {
								byMonth[sale[0]] = {};
							}
							if (byDay[sale[0]] === undefined) {
								byDay[sale[0]] = {};
							}
							if (byDay[sale[0]][sale[1]] === undefined) {
								byDay[sale[0]][sale[1]] = 0;
							}
							if (byMonth[sale[0]][sale[2]] === undefined) {
								byMonth[sale[0]][sale[2]] = 0;
							}
							byMonth[sale[0]][sale[2]] += sale[4];
							byDay[sale[0]][sale[1]] += sale[4];
						}
					});
					console.log("hola soy ventas por platform y por mes", byMonth);
					console.log("hola soy ventas por platform y por dia", byDay);
					setChartData({
						labels: Object.keys(platformsMonths),
						type: "line",
						datasets: Object.keys(byMonth).map(platformID => {
							return {
								label: platformID,
								data: Object.keys(byMonth[platformID]).map(month => byMonth[platformID][month]),
								borderColor: platformsLabels[platformID],
								fill: false,
								borderWidth: 3
							};
						})
					});
				});
		};
		getSalesGraph();
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
													max: 400,
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
