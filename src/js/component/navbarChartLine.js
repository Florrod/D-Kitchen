import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ChartLine } from "./chartLine";
import "../../styles/home.scss";
import { SalesTable } from "./salesTable";
import { ProductTable } from "./productTable";
import { ClientTable } from "./clientTable";
import { useParams } from "react-router-dom";

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
					<button type="button" className="tipoLink" onClick={e => setState({ period: "last_week" })}>
						Última semana
					</button>
				</li>
				<li className="nav-item nav-link mr-3">
					<button type="button" className="tipoLink" onClick={e => setState({ period: "last_month" })}>
						Última mes
					</button>
				</li>
				<li className="nav-item nav-link mr-3">
					<button type="button" className="tipoLink" onClick={e => setState({ period: "total" })}>
						Acumulado
					</button>
				</li>
			</ul>
			<div className="tab-content w-100">
				<div>
					<ChartLine period={state.period} />
				</div>
				<div>
					<SalesTable period={state.period} />
				</div>
				<div>
					<ProductTable period={state.period} />
				</div>
				<div>
					<ClientTable period={state.period} />
				</div>
			</div>
		</div>
	);
};
