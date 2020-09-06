import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";
import dayjs from "dayjs";

const ENDPOINT = "https://3000-f6c6e156-e3ab-40f0-9c56-fff615d563e8.ws-eu01.gitpod.io";

export const ChartLine = props => {
	const { period } = props;
	const [state, setState] = useState({
		//initialize state here
	});
	const params = useParams();
	const [chartData, setChartData] = useState({});
	const [chartDataMonth, setChartDataMonth] = useState({});
	const [chartDataWeek, setChartDataWeek] = useState({});
	let linesData = {};

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
				let current_7days = dayjs().subtract(7, "d");
				let end = dayjs();
				let byMonth = {};
				let byDay = {};
				let platformsLabels = {};
				let platformsMonths = {};
				let platformsYear = {};
				let platformsDays = {};
				sales.forEach(sale => {
					platformsLabels[sale[2]] = "#" + Math.floor(Math.random() * 16777215).toString(16);
					platformsMonths[sale[4]] = "Enero";
					platformsYear[sale[5]] = "2019";
					platformsDays[sale[3]] = "Lunes";
					if (sale[5] == new Date().getFullYear()) {
						if (byMonth[sale[2]] === undefined) {
							byMonth[sale[2]] = {};
						}
						if (byMonth[sale[2]][sale[4]] === undefined) {
							byMonth[sale[2]][sale[4]] = 0;
						}
						byMonth[sale[2]][sale[4]] += sale[6];
						// console.log(`byMonth[${sale[2]}][${sale[4]}] + ${sale[6]}`, byMonth[sale[2]][sale[4]]);

						if (
							dayjs(`${sale[5]}-${sale[4]}-${sale[3]}`).isBefore(end) &&
							dayjs(`${sale[5]}-${sale[4]}-${sale[3]}`).isAfter(current)
						) {
							if (byDay[sale[2]] === undefined) {
								byDay[sale[2]] = {};
							}
							if (byDay[sale[2]][`${sale[3]}/${sale[4]}`] === undefined) {
								byDay[sale[2]][`${sale[3]}/${sale[4]}`] = 0;
							}
							byDay[sale[2]][`${sale[3]}/${sale[4]}`] += sale[6];
						}

						// if (
						// 	dayjs(`${sale[5]}-${sale[4]}-${sale[3]}`).isBefore(end) &&
						// 	dayjs(`${sale[5]}-${sale[4]}-${sale[3]}`).isAfter(current_7days)
						// ) {
						// 	console.log("DAYJS última semana ->", dayjs(`${sale[5]}-${sale[4]}-${sale[3]}`));
						// 	if (byDay[sale[2]] === undefined) {
						// 		byDay[sale[2]] = {};
						// 	}
						// 	if (byDay[sale[2]][`${sale[3]}/${sale[4]}`] === undefined) {
						// 		byDay[sale[2]][`${sale[3]}/${sale[4]}`] = 0;
						// 	}
						// 	byDay[sale[2]][`${sale[3]}/${sale[4]}`] += sale[6];
						// }
					}
				});
				console.log(platformsMonths);
				let lastMonthDays = [];
				let byDaySorted = {};
				while (current.isBefore(end)) {
					lastMonthDays.push(current.format("D/M"));
					// console.log("Aquí está current _>", current.format("D/M"));
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
				// console.log("Aquí está lasMonthDay ->", lastMonthDays);
				// console.log("Aquí byDaySorted -->", byDaySorted);

				let lastWeekDays = [];
				let _byDaySorted = {};
				while (current_7days.isBefore(end)) {
					lastWeekDays.push(current_7days.format("D/M"));
					// console.log("Aquí está current 7days -->", current_7days.format("D/M"));
					Object.keys(platformsLabels).forEach(_platformId => {
						if (typeof byDay[_platformId][current_7days.format("D/M")] === "undefined") {
							byDay[_platformId][current_7days.format("D/M")] = 0;
						}
						if (_byDaySorted[_platformId] === undefined) {
							_byDaySorted[_platformId] = {};
						}
						_byDaySorted[_platformId][current_7days.format("D/M")] =
							byDay[_platformId][current_7days.format("D/M")];
					});

					current_7days = current_7days.add(1, "d");
				}
				// console.log("¡¡Aquí _byDaySorted -->!", _byDaySorted);
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
				// console.log("hola soy ventas por platform y por mes", byMonth);
				// console.log("hola soy ventas por platform y por dia", byDay);
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
				setChartDataWeek({
					labels: lastWeekDays,
					type: "line",
					datasets: Object.keys(_byDaySorted).map(platformID => {
						return {
							label: platformID,
							data: Object.keys(_byDaySorted[platformID]).map(day => _byDaySorted[platformID][day]),
							borderColor: platformsLabels[platformID],
							fill: false,
							borderWidth: 3
						};
					})
				});
			});
	};
	useEffect(() => {
		getSalesGraph();
	}, []);
	// console.log("chartData", chartData);
	let chart;
	switch (period) {
		case "last_week":
			linesData = chartDataWeek;
			break;
		case "last_month":
			linesData = chartDataMonth;
			break;
		default:
			linesData = chartData;
			break;
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4">Evolución de ventas</h2>
							<Line
								redraw={true}
								data={
									period == "total"
										? chartData
										: period == "last_month"
											? chartDataMonth
											: chartDataWeek
								}
								options={{
									responsive: true,
									title: {
										text: "Ingresos medios por plataforma (en €)",
										fontColor: "#2b3800",
										fontSize: 20,
										fontFamily: "abril fatface",
										display: false
									},
									scales: {
										yAxes: [
											{
												ticks: {
													min: 0,
													max: 200,
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
						<div className="card-body" />
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
