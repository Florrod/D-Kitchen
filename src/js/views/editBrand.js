import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { UploadProfile } from "../component/uploadProfile";
import { Link, Redirect, useRouteMatch, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/registerForm.scss";
import "../../styles/home.scss";

export const EditBrand = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");
	const [brandLogo, setBrandLogo] = useState("");
	const [brandName, setBrandName] = useState("");
	const [justEatApiKey, setJustEatApiKey] = useState("");
	const [glovoApiKey, setGlovoApiKey] = useState("");

	useEffect(() => {
		actions.getEnterprisesWithBrands();
		console.log("running useEffect edit brand", store.allData);
		for (let mainObject of store.allData) {
			console.log("checking main object > ", mainObject);
			for (let firstCapa of mainObject) {
				console.log("ver firstCapa", firstCapa);
			}
			if (firstCapa.id == props.match.params.brandid) {
				console.log("found it!");
				setId(firstCapa.id);
				setBrandLogo(firstCapa.logo);
				setName(firstCapa.name);
				setJustEatApiKey(firstCapa.API_key);
				// setGlovoApiKey(brand.glovoApiKey);
				// setEnterpriseEdited(true);
			}
			break;
		}
	}, []);

	return (
		<form>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title col-sm-12">
								<h1 className="titleForm">Crea tu nueva marca</h1>
							</div>
						</div>
						<UploadProfile />
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="nombre-empresa">Nombre de la marca</label>
								<input
									id="nombre-empresa"
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la empresa"
									onChange={e => setBrandName(e.target.value)}
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="api-key-just-eat">API Key Just-Eat</label>
								<input
									id="api-key-just-eat"
									type="text"
									className="form-control form-fixer"
									placeholder="API Key Just-Eat"
									onChange={e => setJustEatApiKey(e.target.value)}
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="api-key-glovo">API Key Glovo</label>
								<input
									id="api-key-glovo"
									type="text"
									className="form-control form-fixer"
									placeholder="API Key Glovo"
									onChange={e => setGlovoApiKey(e.target.value)}
								/>
							</div>
						</div>
						<div className="row justify-content-center mt-4">
							<Link to="/companyAdded">
								<div className="col">
									<button
										className="btn"
										onClick={() => {
											actions.addBrand(brandLogo, brandName, justEatApiKey, glovoApiKey);
										}}>
										<input type="submit" value="Guardar" className="button" />
									</button>
								</div>
							</Link>
							<Link to="/">
								<div className="col">
									<span className="button" href="#" role="button">
										Back home
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

EditBrand.propTypes = {
	match: PropTypes.object
};
