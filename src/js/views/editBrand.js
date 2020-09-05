import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { UploadProfile } from "../component/uploadProfile";
import { Link, Redirect, useRouteMatch, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/registerForm.scss";
import "../../styles/home.scss";

export const EditBrand = ({ match }) => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");
	// const [brandLogo, setBrandLogo] = useState("");
	const [editName, setBrandName] = useState("");
	const [apiKeys, setApiKeys] = useState([]);
	const [brand, setBrand] = useState({});
	const params = useParams();

	useEffect(() => {
		// actions.navBrandId(params.brandid);
		// return () => {
		// 	actions.navBrandId(null);
		// };
		for (let e of store.allData) {
			// el let of itera en cada elemento de un arreglo. Es un sustituo del for each pero no hace un bucle infinito de búsqueda
			// store.allData.forEach(e =>
			console.log("Buscando brand en la empresa ->", e.id);
			const _brand = e.brand_id.find(b => b.id == params.brandid);
			if (_brand) {
				console.log("found brand", _brand);
				setId(_brand.id);
				// setBrandLogo(_brand.logo);
				setBrandName(_brand.name);
				// setJustEatApiKey(_brand.API_key);
				// setGlovoApiKey(_brand.API_key);
				console.log("found it!", _brand.integrations[0].platform_name);
				setBrand(_brand);
				let integrations = {};
				for (let apiKey of _brand.integrations) {
					integrations[`${apiKey.platform_id == 1 ? "JE" : "GL"}`] = apiKey.API_key;
				}
				setApiKeys(integrations);
				break;
			}
		}
	}, []);

	return (
		<form>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title col-sm-12">
								<h1 className="titleForm">Edita tu marca</h1>
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
									defaultValue={editName}
									onChange={e => setBrandName(e.target.value)}
								/>
							</div>
						</div>
						{brand.integrations &&
							brand.integrations.map(apiKey => {
								return (
									<div className="row align-items-center mt-4" key={apiKey.platform_id}>
										<div className="col">
											<label htmlFor={apiKey.platform_id}>{`API Key ${
												apiKey.platform_name
											}`}</label>
											<input
												id={apiKey.platform_id}
												type="text"
												className="form-control form-fixer"
												placeholder={`API Key ${apiKey.platform_name}`}
												value={apiKeys[`${apiKey.platform_id == 1 ? "JE" : "GL"}`]}
												onChange={e =>
													setApiKeys({
														...apiKeys,
														[`${apiKey.platform_id == 1 ? "JE" : "GL"}`]: e.target.value
													})
												}
											/>
										</div>
									</div>
								);
							})}

						<div className="row justify-content-center mt-4">
							<Link to="/companyAdded">
								<div className="col">
									<button
										className="btn"
										onClick={() => {
											actions.editBrand(id, editName, apiKeys);
										}}>
										<input type="submit" value="Guardar" className="button" />
									</button>
								</div>
							</Link>
							<Link to="/companyList">
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
