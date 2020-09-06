import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UploadProfile } from "../component/uploadProfile";
import "../../styles/registerForm.scss";
import "../../styles/home.scss";

export const AddBrand = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");
	const [brandLogo, setBrandLogo] = useState("");
	const [brandName, setBrandName] = useState("");
	const [justEatApiKey, setJustEatApiKey] = useState("");
	const [glovoApiKey, setGlovoApiKey] = useState("");

	return (
		<form>
			<div className="container-fluid">
				<div className="form-row justify-content-center">
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
									required
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
						<div className="row justify-content-center mt-3 mb-2">
							<Link to="/companyAdded">
								<div className="col">
									<button
										className="btn"
										onClick={() => {
											actions.addBrand(brandLogo, brandName, justEatApiKey, glovoApiKey);
										}}>
										<input type="submit" value="Guardar" className="buttom" />
									</button>
								</div>
							</Link>
							<Link to="/companyList">
								<div className="col">
									<button className="btn">
										<input type="submit" value="Volver" className="buttom" />
									</button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
