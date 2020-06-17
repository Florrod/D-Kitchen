import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const SearchBar = () => {
	const [state, setState] = useState({
	});

	return (
                <div className="input-group">
					<input type="text" className="form-control" placeholder="Busca tu empresa..." />
					<div className="input-group-append">
						<button className="btn btn-secondary" type="button">
							<i className="fa fa-search" />
						</button>
					</div>
				</div>
	);
};