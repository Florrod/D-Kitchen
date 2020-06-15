import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/companyCard.scss";

export const CompanyCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="container">
			<div className="card panel panel-info">
				<div className="card-header panel-heading collapsed" data-toggle="collapse" data-target="#bar">
					<i className="fa fa-fw fa-chevron-down" />
					<i className="fa fa-fw fa-chevron-right" />
					Empresa número 1
				</div>
				<div className="panel-body">
					<li className="collapse ml-4 list-group-item" id="bar">
						<div className="row w-100">
							<div className="col">
								<label className="name lead">Mike Anamendolla</label>
								<br />
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">5842 Hillcrest Rd</span>
								<br />
								<span
									className="fa fa-phone fa-fw text-muted mr-3"
									data-toggle="tooltip"
									title=""
									data-original-title="(870) 288-4149"
								/>
								<span className="text-muted small">(870) 288-4149</span>
								<br />
								<span
									className="fa fa-envelope fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small text-truncate">mike.ana@example.com</span>
							</div>
						</div>
					</li>
					<div className="collapse  ml-4" id="bar">
						Marca 1
					</div>
					<div className="collapse  ml-4" id="bar">
						Marca 2
					</div>
				</div>
			</div>
			<div className="card panel panel-info">
				<div className="card-header panel-heading collapsed" data-toggle="collapse" data-target="#bar2">
					<i className="fa fa-fw fa-chevron-down" />
					<i className="fa fa-fw fa-chevron-right" />
					Empresa número 2
				</div>
				<div className="panel-body">
					<li className="collapse ml-4 list-group-item" id="bar2">
						<div className="row w-100">
							<div className="col">
								<label className="name lead">Mike Anamendolla</label>
								<br />
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">5842 Hillcrest Rd</span>
								<br />
								<span
									className="fa fa-phone fa-fw text-muted mr-3"
									data-toggle="tooltip"
									title=""
									data-original-title="(870) 288-4149"
								/>
								<span className="text-muted small">(870) 288-4149</span>
								<br />
								<span
									className="fa fa-envelope fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small text-truncate">mike.ana@example.com</span>
							</div>
						</div>
					</li>
					<div className="collapse ml-4" id="bar2">
						Marca 1
					</div>
					<div className="collapse  ml-4" id="bar2">
						Marca 2
					</div>
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
