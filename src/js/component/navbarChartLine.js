import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChartLine } from "./chartLine";
import "../../styles/home.scss";
import { SalesTable } from "./salesTable";
import { ProductTable } from "./productTable";
import { ClientTable } from "./clientTable";

export const NavbarChartLine = props => {
	const [state, setState] = useState({
		period: "total"
	});
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
				{/* <div id="home" className="tab-pane fade in active"> */}
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
				{/* </div>
				<div id="menu1" className="tab-pane fade">
					<div>
						<ChartLine />
					</div>
					<div>
						<SalesTable />
					</div>
					<div>
						<ProductTable />
					</div>
					<div>
						<ClientTable />
					</div>
				</div>
				<div id="menu2" className="tab-pane fade">
					<div>
						<ChartLine />
					</div>
					<div>
						<SalesTable />
					</div>
					<div>
						<ProductTable />
					</div>
					<div>
						<ClientTable />
					</div>
				</div>*/}
			</div>
		</div>
	);
};
