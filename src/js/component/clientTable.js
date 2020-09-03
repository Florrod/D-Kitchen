import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-afee9549-6454-4158-a803-5e3e769585c3.ws-eu01.gitpod.io";

export const ClientTable = props => {
	const [platforms, setPlatforms] = useState([]);
	const params = useParams();

	const getRecurrentClients = period => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/recurrent-clients?period=${period}&brand=${params.brandId}`, {
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
			getRecurrentClients(props.period);
		},
		[props.period]
	);

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<tbody>
					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-6 h5">Plataformas</div>
								<div className="col-6 h5">Clientes recurrentes</div>
							</div>
							{platforms
								? platforms.map((plat, index) => (
										<div className="row" key={plat.platform_id}>
											<div className="col-6">{plat.platform_name}</div>
											<div className="col-6 text-center">{plat.client_identifier}</div>
											{/* {plat.orders_count.map((contact, index) => (
												<div key={index} className="col-6 text-center">
													{" "}
													{contact.phone}
													{contact.customer_id_platform}
												</div>
											))} */}
										</div>
								  ))
								: ""}
						</div>
					</div>
				</tbody>
			</table>
		</div>
	);
};
ClientTable.propTypes = {
	period: PropTypes.string
};
ClientTable.defaultProps = {
	period: "total"
};
