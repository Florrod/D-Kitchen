import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/companyCard.scss";
import "../../styles/home.scss";

export const SearchBar = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	return (
		<div className="main">
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Busca la empresa..." />
				<div className="input-group-append">
					<button className="btn btn-secondary" type="button">
						<i className="fa fa-search" />
					</button>
				</div>
			</div>
		</div>
	);
};
