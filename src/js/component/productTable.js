import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-d3f07519-d893-4493-bc4a-c846bc31aa31.ws-eu01.gitpod.io/";

export const ProductTable = props => {
	const [platforms, setPlatforms] = useState([]);

	const getTopProducts = platform_id => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/top-products/${platform_id}`, {
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

	useEffect(() => {
		getTopProducts(1);
	}, []);

	if (platforms == null) return "";

	if (platforms[0] == null) return "";

	return (
		<div className="table-responsive-sm">
			<div className="row">
				<div className="col-4">
					<div className="row">
						<p>Ranking</p>
						{platforms
							? platforms.map((plat, index) => (
									<div className="col-12" key={plat.id}>
										{plat.name}
									</div>
							  ))
							: ""}
					</div>
					<div className="row">
						{platforms
							? platforms.map((plat, index) => (
									<div key={plat.id} className="platform">
										{plat.top_products.map((product, index) => (
											<div className="col-12" key={product.name}>
												{" "}
												{product.name}
											</div>
										))}
									</div>
							  ))
							: ""}
						;
					</div>
				</div>
			</div>
		</div>
	);
};
