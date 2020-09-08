import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import ScrollToTop from "./component/scrollToTop";

import { Single } from "./views/single";
import { CompanyAdded } from "./views/companyAdded";
import { Login } from "./views/login";
import { RemindPassword } from "./views/remindpassword";
import { CompanyList } from "./views/companyList";
import { EditEnterprise } from "./views/editEnterprise.js";
import { AddBrand } from "./views/addBrand";
import injectContext from "./store/appContext";

// import { Footer } from "./component/footer";
import { Navbar } from "./component/navbar";
import { RegisterForm } from "./component/registerForm";
import { UploadProfile } from "./component/uploadProfile";
import { ChartLine } from "./component/chartLine.js";
import { NavbarChartLine } from "./component/navbarChartLine";
import { SalesTable } from "./component/salesTable";
import { EditBrand } from "./views/editBrand";

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
						{/* <Route exact path="/" component={HomeOut} /> */}
						<Route exact path="/" component={Login} />
						<Route exact path="/remind-password" component={RemindPassword} />
						<Route exact path="/registerForm" component={RegisterForm} />
						<Route exact path="/companyAdded" component={CompanyAdded} />
						<Route exact path="/companyList" component={CompanyList} />
						<Route exact path="/edit/brand/:brandid" component={EditBrand} />
						<Route exact path="/edit/:enterpriseid" component={EditEnterprise} />
						<Route exact path="/add-brand" component={AddBrand} />
						<Route exact path="/chartLine" component={ChartLine} />
						<Route exact path="/navbarChartLine/:brandId" component={NavbarChartLine} />
						<Route exact path="/salesTable" component={SalesTable} />
						<Route exact path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
