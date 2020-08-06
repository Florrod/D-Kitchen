import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeOut } from "./views/homeout";
import { Single } from "./views/single";
import { CompanyAdded } from "./views/companyAdded";
import { Login } from "./views/login";
import { RemindPassword } from "./views/remindpassword";
import { CompanyList } from "./views/companyList";
import injectContext from "./store/appContext";

// import { Footer } from "./component/footer";
import { Navbar } from "./component/navbar";
import { RegisterForm } from "./component/registerForm";
import { UploadProfile } from "./component/uploadProfile";
import { ChartLine } from "./component/chartLine.js";
import { NavbarChartLine } from "./component/navbarChartLine";
import { SalesTable } from "./component/salesTable";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={HomeOut} />
						<Route exact path="/" component={Login} />
						<Route exact path="/remind-password" component={RemindPassword} />
						<Route path="/registerForm" component={RegisterForm} />
						<Route path="/companyAdded" component={CompanyAdded} />
						<Route path="/companyList" component={CompanyList} />
						<Route path="/chartLine" component={ChartLine} />
						<Route path="/navbarChartLine" component={NavbarChartLine} />
						<Route path="/salesTable" component={SalesTable} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
