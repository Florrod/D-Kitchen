import React, { useState, useEffect, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ChartLine } from "../component/chartLine.js";
import { Link, useParams } from "react-router-dom";
import "../../styles/companyCard.scss";
import "../../styles/home.scss";

const ENDPOINT = "https://3000-e235e552-6019-4406-9dae-b6e1d0b739af.ws-eu01.gitpod.io";

export const CompanyCard = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	const params = useParams(); // props.match.params

	return (
		<div className="container mt-0">
			<div className="card panel panel-info">
				{Array.isArray(store.allData) && //con el array.isarray le preguntamos si es un arreglo vacío y si no es así no entra en el map
					store.allData.map((enterprise, index) => (
						<React.Fragment key={enterprise.id}>
							<div
								className="card-header panel-heading collapsed"
								data-toggle="collapse"
								data-target={`#bar${enterprise.id}`}>
								<i className="fas fa-angle-double-down showCompany" />
								<i className="fas fa-angle-double-up showCompany" />
								<h5 className="mb-0"> {enterprise.name}</h5>
							</div>
							<div className="panel-body collapse" id={`bar${enterprise.id}`}>
								<li className="list-group-item">
									<div className="row w-100 mb-2">
										<div className="col-9">
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted"> {enterprise.address}</span>
										</div>
										<Link className="btn company mb-2" to="/add-brand">
											<i className="mr-3 fas fa-user-plus" />
											Añadir nueva marca
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
											<span className="text-muted"> {enterprise.phone}</span>
										</div>
										<Link className="btn company mb-2" to={`edit/${enterprise.id}`}>
											<i className="mr-3 fas fa-pencil-alt" />
											Editar empresa
										</Link>
									</div>
									<div className="row w-100 mb-3">
										<div className="col-9">
											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted text-truncate"> {enterprise.email}</span>
										</div>
										<button
											className="btn company mb-2"
											onClick={() => {
												actions.deleteEnterprise(enterprise.id);
											}}>
											<i className="mr-3 fas fa-trash-alt" />
											Eliminar empresa
										</button>
									</div>
								</li>
								<li className="col list-group-item">
									{enterprise.brand_id.map((brand, index) => (
										<div key={brand.name} className="row w-100">
											<div className="col">
												{" "}
												<strong>{brand.name}</strong>
												<div className="float-right">
													<Link to={`/edit/brand/${brand.id}`}>
														<button className="btn">
															<i className="fas fa-pencil-alt" />
														</button>
													</Link>
													<button
														className="btn"
														onClick={() => {
															actions.deleteBrand(brand.id);
														}}>
														<i className="fas fa-trash-alt" />
													</button>
													<Link to={`/navbarChartLine/${brand.id}`}>
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
