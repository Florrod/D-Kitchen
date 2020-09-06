import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-f6c6e156-e3ab-40f0-9c56-fff615d563e8.ws-eu01.gitpod.io";

export const SalesTable = props => {
	const [platforms, setPlatforms] = useState({});
	const params = useParams();

	const getTotalSales = period => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/total-sales?period=${period}&brand=${params.brandId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then(res => res.json())
			.then(platforms => {
				setPlatforms(platforms);
			});
	};

	useEffect(
		() => {
			getTotalSales(props.period);
		},
		[props.period] // le decimos que al cambiar los props debe ejecutar de nuevo la función
	);

	const roundSales = x => {
		return Math.round(x);
	};

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-6 h5">Plataformas</div>
								<div className="col-6 h5">Ventas Totales</div>
							</div>
							{platforms
								? platforms.map((plat, index) => (
										<div className="row" key={plat.id}>
											<div className="col-6 h6">{plat.name}</div>
											<div className="col-6">{roundSales(plat.total_price)}</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SalesTable.propTypes = {
	period: PropTypes.string
};
SalesTable.defaultProps = {
	period: "total"
};
