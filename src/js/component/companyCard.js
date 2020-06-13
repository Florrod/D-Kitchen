import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CompanyCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-9 text-sm-left">
					<label className="name lead">Mike Anamendolla</label>
				</div>
				<p>
					<button
						className="btn btn-primary"
						type="button"
						data-toggle="collapse"
						data-target="#collapseExample"
						aria-expanded="false"
						aria-controls="collapseExample">
						Ver marcas de esta empresa
					</button>
				</p>
				<div className="collapse" id="collapseExample">
					<div className="card card-body">
						Descripción marca 1
						<div>
							<div className=" float-right">
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								<button className="btn">
									<i className="fas fa-chart-bar mr-3" />
								</button>
								<button className="btn" onClick={() => props.onDelete()}>
									<i className="fas fa-trash-alt" />
								</button>
							</div>
						</div>
					</div>
					<div className="card card-body">
						Descripción marca 2
						<div>
							<div className=" float-right">
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								<button className="btn">
									<i className="fas fa-chart-bar mr-3" />
								</button>
								<button className="btn" onClick={() => props.onDelete()}>
									<i className="fas fa-trash-alt" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
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
