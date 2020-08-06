import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-d3f07519-d893-4493-bc4a-c846bc31aa31.ws-eu01.gitpod.io";

export const ProductTable = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const [products, setProducts] = useState({});
	const [platforms, setPlatforms] = useState([]);

	useEffect(
		() => {
			platforms.forEach(p => {
				getTopProducts(p.id).then(data_from_products => {
					setProducts({
						...products,
						[p.id]: data_from_products
					});
				});
			});
		},
		[platforms]
	); //Cada vez que se modifique products se producirá este efecto secundario

	const getPlatforms = platform_id => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/integration/platform`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`
			}
		})
			.then(platform_json => {
				platforms = platform_json;
				return platforms;
			})
			.then(platforms => {
				setPlatforms(platforms);
				let products = {};
				platforms.forEach(p => (products[p.id] = []));
				setProducts(products);
			});
	};

	const getTopProducts = platform_id => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/top-product/${platform_id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`
			}
		}).then(res => res.json());
	};

	return (
		<div className="table-responsive-sm">
			<div className="row">
				<div className="col-4">
					<div className="row">
						<p>Ranking</p>
						{platforms.map((index, plat) => (
							<div className="col-12" key={index} products={products[plat.id]} />
						))}
					</div>
					<div className="row">
						{products.map((index, prod) => (
							<div className="col-12" key={index}>
								{" "}
								{prod.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
