import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";
import dayjs from "dayjs";

const ENDPOINT = "https://3000-afee9549-6454-4158-a803-5e3e769585c3.ws-eu01.gitpod.io";

export const ChartLine = ({ period }) => {
	const [state, setState] = useState({
		//initialize state here
	});
	const params = useParams();
	const [chartData, setChartData] = useState({});
	const [chartDataMonth, setChartDataMonth] = useState({});
	const [chartDataWeek, setChartDataWeek] = useState({});

	useEffect(() => {
		const getSalesGraph = () => {
			let access_token = localStorage.getItem("access_token");
			return fetch(`${ENDPOINT}/test?brand=${params.brandId}`, {
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
						return total + current[5];
					}, 0);
					let current = dayjs().subtract(30, "d");
					let end = dayjs();
					let byMonth = {};
					let byDay = {};
					let platformsLabels = {};
					let platformsMonths = {};
					let platformsYear = {};
					let platformsDays = {};
					sales.forEach(sale => {
						platformsLabels[sale[0]] = "#" + Math.floor(Math.random() * 16777215).toString(16);
						platformsMonths[sale[3]] = "Enero";
						platformsYear[sale[4]] = "2019";
						platformsDays[sale[2]] = "Lunes";
						if (sale[4] == new Date().getFullYear()) {
							if (byMonth[sale[0]] === undefined) {
								byMonth[sale[0]] = {};
							}
							if (byMonth[sale[0]][sale[3]] === undefined) {
								byMonth[sale[0]][sale[3]] = 0;
							}
							byMonth[sale[0]][sale[3]] += sale[5];

							if (
								dayjs(`${sale[4]}-${sale[3]}-${sale[2]}`).isBefore(end) &&
								dayjs(`${sale[4]}-${sale[3]}-${sale[2]}`).isAfter(current)
							) {
								console.log("DAYJS ->", dayjs(`${sale[4]}-${sale[3]}-${sale[2]}`));
								if (byDay[sale[0]] === undefined) {
									byDay[sale[0]] = {};
								}
								if (byDay[sale[0]][`${sale[2]}/${sale[3]}`] === undefined) {
									byDay[sale[0]][`${sale[2]}/${sale[3]}`] = 0;
								}
								byDay[sale[0]][`${sale[2]}/${sale[3]}`] += sale[5];
							}
						}
					});
					let lastMonthDays = [];
					let byDaySorted = {};
					while (current.isBefore(end)) {
						lastMonthDays.push(current.format("D/M"));
						console.log("Aquí está current _>", current.format("D/M"));
						Object.keys(platformsLabels).forEach(_platformid => {
							if (typeof byDay[_platformid][current.format("D/M")] === "undefined") {
								byDay[_platformid][current.format("D/M")] = 0;
							}
							if (byDaySorted[_platformid] === undefined) {
								byDaySorted[_platformid] = {};
							}
							byDaySorted[_platformid][current.format("D/M")] = byDay[_platformid][current.format("D/M")];
						});

						current = current.add(1, "d");
					}
					console.log("Aquí está lasMonthDay ->", lastMonthDays);
					console.log("Aquí byDaySorted -->", byDaySorted);
					// for (let i = 30; i >= 0; i--) {
					// 	lastMonthDays.push(
					// 		`${new Date(
					// 			today.getFullYear(),
					// 			today.getMonth(),
					// 			today.getDate() - i
					// 		).getDate()}/${new Date(
					// 			today.getFullYear(),
					// 			today.getMonth(),
					// 			today.getDate() - i
					// 		).getMonth() + 1}`
					// 	);
					// }
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
					setChartDataMonth({
						labels: lastMonthDays,
						type: "line",
						datasets: Object.keys(byDaySorted).map(platformID => {
							return {
								label: platformID,
								data: Object.keys(byDaySorted[platformID]).map(day => byDaySorted[platformID][day]),
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
								data={period == "total" ? chartData : chartDataMonth}
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
ChartLine.propTypes = {
	period: PropTypes.string
};
ChartLine.defaultProps = {
	period: "total"
};
