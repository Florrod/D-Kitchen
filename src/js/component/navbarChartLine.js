import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ChartLine } from "./chartLine";
import { SalesTable } from "./salesTable";
import { ProductTable } from "./productTable";
import { ClientTable } from "./clientTable";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";

export const NavbarChartLine = props => {
	const [state, setState] = useState({
		period: "total"
	});
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.navBrandId(params.brandId);
		return () => {
			actions.navBrandId(null);
		};
	}, []);
	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item nav-link mr-3">
					<button
						type="button"
						className="btn btn-outline-dark"
						onClick={e => setState({ period: "last_week" })}>
						Últimos 7 días
					</button>
				</li>
				<li className="nav-item nav-link mr-3">
					<button
						type="button"
						className="btn btn-outline-dark"
						onClick={e => setState({ period: "last_month" })}>
						Últimos 30 días
					</button>
				</li>
				<li className="nav-item nav-link mr-3">
					<button type="button" className="btn btn-outline-dark" onClick={e => setState({ period: "total" })}>
						Acumulado año en curso
					</button>
				</li>
			</ul>
			<div className="tab-content w-100">
				<div className="mb-4">
					<ChartLine period={state.period} />
				</div>
				<div className="mb-4">
					<SalesTable period={state.period} />
				</div>
				<div className="mb-4">
					<ProductTable period={state.period} />
				</div>
				<div className="mb-4">
					<ClientTable period={state.period} />
				</div>
			</div>
		</div>
	);
};
