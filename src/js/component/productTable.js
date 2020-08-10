import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-a32a2cb8-df3f-46cd-86d1-360b668071f5.ws-eu01.gitpod.io/";

export const ProductTable = props => {
	const [platforms, setPlatforms] = useState([]);

	const getTopProducts = () => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/top-products`, {
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
		getTopProducts();
	}, []);

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<tbody>
					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-4">Ranking</div>
								{platforms
									? platforms.map((plat, index) => (
											<div className="col-4 ml-2" key={plat.id}>
												{plat.name}
											</div>
									  ))
									: ""}
							</div>
							<div className="row">
								<div className="col-4">
									<p>1º</p>
									<p>2º</p>
									<p>3º</p>
									<p>4º</p>
									<p>5º</p>
								</div>
								{platforms
									? platforms.map((plat, index) => (
											<div className="col-4" key={plat.id}>
												{plat.top_products.map((product, index) => (
													<div key={product.name}>
														{" "}
														<div className="row ml-5">{product.name}</div>
													</div>
												))}
											</div>
									  ))
									: ""}
							</div>
						</div>
					</div>
				</tbody>
			</table>
		</div>
	);
};
