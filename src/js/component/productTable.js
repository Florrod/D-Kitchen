import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-f6c6e156-e3ab-40f0-9c56-fff615d563e8.ws-eu01.gitpod.io";

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
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<h3 className="text-center mb-4">Productos más populares</h3>
							<div className="row">
								<div className="columnNames col-sm-4 h5">Ranking</div>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
ProductTable.propTypes = {
	period: PropTypes.string
};
ProductTable.defaultProps = {
	period: "total"
};
