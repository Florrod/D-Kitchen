import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ChartLine } from "../component/chartLine.js";
import { Link } from "react-router-dom";
import "../../styles/companyCard.scss";
import "../../styles/home.scss";

const ENDPOINT = "https://3000-a32a2cb8-df3f-46cd-86d1-360b668071f5.ws-eu01.gitpod.io/";

export const CompanyCard = props => {
	const { store, actions } = useContext(Context);

	const [enterprises, setEnterprises] = useState([]);

	const getEnterprisesWithBrands = () => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/enterprise/brands`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then(res => res.json())
			.then(enterprises => {
				console.log(enterprises);
				setEnterprises(enterprises);
			});
	};

	useEffect(() => {
		getEnterprisesWithBrands();
	}, []);

	return (
		<div className="container mt-0">
			<div className="card panel panel-info">
				{enterprises.map((enterprise, index) => (
					<React.Fragment key={enterprise.id}>
						<div className="card-header panel-heading collapsed" data-toggle="collapse" data-target="#bar">
							<i className="fas fa-angle-double-down showCompany" />
							<i className="fas fa-angle-double-up showCompany" />
							<h5 className="mb-0"> {enterprise.name}</h5>
						</div>
						<div className="panel-body">
							<li className="collapse list-group-item" id="bar">
								<div className="row w-100 mb-2">
									<div className="col-9">
										<i className="fas fa-map-marker-alt text-muted mr-3" />
										<span className="text-muted"> {enterprise.address}</span>
									</div>
									<Link className="company" to="/registerForm">
										<div className="col mb-0">
											<i className="mr-3 fas fa-user-plus" />
											Añadir nueva marca
										</div>
									</Link>
								</div>
								<div className="row w-100 mb-2">
									<div className="col-9">
										<span
											className="fa fa-phone fa-fw text-muted mr-3"
											data-toggle="tooltip"
											title=""
											data-original-title="(870) 288-4149"
										/>
										<span className="text-muted small"> {enterprise.phone}</span>
									</div>
									<div className="col company">
										<i className="mr-3 fas fa-pencil-alt" />
										Editar empresa
									</div>
								</div>
								<div className="row w-100 mb-3">
									<div className="col-9">
										<span
											className="fa fa-envelope fa-fw text-muted mr-3"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										/>
										<span className="text-muted small text-truncate"> {enterprise.email}</span>
									</div>
									<div className="col company">
										<i className="mr-3 fas fa-trash-alt" />
										Eliminar empresa
									</div>
								</div>
							</li>
							<li className="col collapse list-group-item" id="bar">
								{enterprise.brand_id.map((brand, index) => (
									<div key={brand.name} className="row w-100">
										<div className="col" id="bar">
											{" "}
											{brand.name}
											<div className="float-right">
												<button className="btn">
													<i className="fas fa-pencil-alt" />
												</button>
												<button className="btn">
													<i className="fas fa-trash-alt" />
												</button>
												<Link to="/navbarChartLine">
													<button className="btn">
														<i className="fas fa-chart-bar" />
													</button>
												</Link>
											</div>
										</div>
									</div>
								))}
							</li>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
CompanyCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
CompanyCard.defaultProps = {
	onDelete: null
};
