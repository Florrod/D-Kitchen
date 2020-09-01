import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-c3bf5342-eaa7-49f5-b2d2-925fab673d60.ws-us02.gitpod.io";

export const ProductTable = props => {
	const [platforms, setPlatforms] = useState([]);
	const params = useParams(); // props.match.params

	const getTopProducts = period => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/top-products?period=${period}&brand=${params.brandId}`, {
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
			getTopProducts(props.period);
		},
		[props.period]
	);

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<tbody>
					<div className="row">
						<div className="col-sm-4 h5">Ranking</div>
						{platforms
							? platforms.map((plat, index) => (
									<div className="col-sm-4 h5" key={plat.id}>
										{plat.name}
									</div>
							  ))
							: ""}
					</div>
					<div className="row">
						<div className="col-sm-4">
							<p className="specialRow">1º</p>
							<p className="specialRow">2º</p>
							<p className="specialRow">3º</p>
							<p className="specialRow">4º</p>
							<p className="specialRow">5º</p>
						</div>
						{platforms
							? platforms.map((plat, index) => (
									<div className="col text-align-left" key={plat.id}>
										{plat.top_products.map((product, index) => (
											<div key={product.name}>
												{" "}
												<div className="row ml-2 specialRow w-100">{product.name}</div>
											</div>
										))}
									</div>
							  ))
							: ""}
					</div>
				</tbody>
			</table>
		</div>
	);
};
ProductTable.propTypes = {
	period: PropTypes.string
};
ProductTable.defaultProps = {
	period: "total"
};
