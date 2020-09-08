import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-e235e552-6019-4406-9dae-b6e1d0b739af.ws-eu01.gitpod.io";

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

	return (
		<>
			{platforms == null || platforms[0] == null ? (
				<p className="text-center">Estamos cargando tus datos</p>
			) : (
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<div className="card">
								<div className="card-body">
									<h3 className="text-center mb-4">Clientes recurrentes</h3>
									<div className="row">
										<div className="columnNames col-6 h5">Plataformas</div>
										<div className="columnNames col-6 h5">Clientes recurrentes</div>
									</div>
									{platforms
										? platforms.map((plat, index) => (
												<div className="row" key={plat.platform_id}>
													<div className="col-6">{plat.platform_name}</div>
													<div className="col-6">{plat.client_identifier}</div>
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
						</div>
					</div>
				</div>
			)}
		</>
	);
};
ClientTable.propTypes = {
	period: PropTypes.string
};
ClientTable.defaultProps = {
	period: "total"
};
