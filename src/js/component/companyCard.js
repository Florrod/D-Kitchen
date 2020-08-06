import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ChartLine } from "../component/chartLine.js";
import { Link } from "react-router-dom";
import "../../styles/companyCard.scss";
import "../../styles/home.scss";

export const CompanyCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="container mt-0">
			<div className="card panel panel-info">
				<div className="card-header panel-heading collapsed" data-toggle="collapse" data-target="#bar">
					<i className="fas fa-angle-double-down showCompany" />
					<i className="fas fa-angle-double-up showCompany" />
					<h5 className="mb-0">Empresa número 1</h5>
				</div>
				<div className="panel-body">
					<li className="collapse list-group-item" id="bar">
						<div className="row w-100 mt-2">
							<label className="col-9 name lead">Mike Anamendolla</label>
						</div>
						<div className="row w-100 mb-2">
							<div className="col-9">
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">5842 Hillcrest Rd</span>
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
								<span className="text-muted small">(870) 288-4149</span>
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
								<span className="text-muted small text-truncate">mike.ana@example.com</span>
							</div>
							<div className="col company">
								<i className="mr-3 fas fa-trash-alt" />
								Eliminar empresa
							</div>
						</div>
					</li>
					<li className="col collapse list-group-item" id="bar">
						<div className="row w-100">
							<div className="col" id="bar">
								Lennis Grill
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
					</li>
					<li className="col collapse list-group-item" id="bar">
						<div className="row w-100">
							<div className="col" id="bar">
								The Haven
								<div className="float-right">
									<button className="btn">
										<i className="fas fa-pencil-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-trash-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-chart-bar" />
									</button>
								</div>
							</div>
						</div>
					</li>
				</div>
			</div>
			<div className="card panel panel-info">
				<div className="card-header panel-heading collapsed" data-toggle="collapse" data-target="#bar2">
					<i className="fas fa-angle-double-down showCompany" />
					<i className="fas fa-angle-double-up showCompany" />
					<h5 className="mb-0">Empresa número 2</h5>
				</div>
				<div className="panel-body">
					<li className="collapse list-group-item" id="bar2">
						<div className="row w-100 mt-2">
							<label className="col-9 name lead">John Mc Carthy</label>
						</div>
						<div className="row w-100 mb-2">
							<div className="col-9">
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">3000 New York</span>
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
								<span className="text-muted small">(654) 190-7419</span>
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
								<span className="text-muted small text-truncate">john.mcCarthy@example.com</span>
							</div>
							<div className="col company">
								<i className="mr-3 fas fa-trash-alt" />
								Eliminar empresa
							</div>
						</div>
					</li>
					<li className="col collapse list-group-item" id="bar2">
						<div className="row w-100">
							<div className="col" id="bar2">
								Pizzeria trattoria
								<div className="float-right">
									<button className="btn">
										<i className="fas fa-pencil-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-trash-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-chart-bar" />
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="col collapse list-group-item" id="bar2">
						<div className="row w-100">
							<div className="col" id="bar2">
								Burguer Mc Carthy
								<div className="float-right">
									<button className="btn">
										<i className="fas fa-pencil-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-trash-alt" />
									</button>
									<button className="btn">
										<i className="fas fa-chart-bar" />
									</button>
								</div>
							</div>
						</div>
					</li>
				</div>
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