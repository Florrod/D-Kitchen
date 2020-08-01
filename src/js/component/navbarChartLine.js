import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChartLine } from "./chartLine";
import "../../styles/home.scss";
import { SalesTable } from "./salesTable";
import { ProductTable } from "./productTable";
import { ClientTable } from "./clientTable";

export const NavbarChartLine = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item nav-link mr-3">
					<a className="tipoLink" data-toggle="tab" href="#home">
						Última semana
					</a>
				</li>
				<li className="nav-item nav-link mr-3">
					<a className="tipoLink" data-toggle="tab" href="#menu1">
						Última mes
					</a>
				</li>
				<li className="nav-item nav-link mr-3">
					<a className="tipoLink" data-toggle="tab" href="#menu2">
						Acumulado
					</a>
				</li>
			</ul>

			<div className="tab-content w-100">
				<div id="home" className="tab-pane fade in active">
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
				</div>
			</div>
		</div>
	);
};
