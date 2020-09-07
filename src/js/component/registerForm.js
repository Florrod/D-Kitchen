import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UploadProfile } from "./uploadProfile";
import "../../styles/registerForm.scss";
import "../../styles/home.scss";

export const RegisterForm = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");
	const [brandLogo, setBrandLogo] = useState("");
	const [CifNumber, setCifNumber] = useState("");
	const [enterpriseName, setEnterpriseName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [brandName, setBrandName] = useState("");
	const [justEatApiKey, setJustEatApiKey] = useState("");
	const [glovoApiKey, setGlovoApiKey] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<form>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title col-sm-12">
								<h1 className="titleForm">Formulario de Registro</h1>
							</div>
						</div>
						<UploadProfile />
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="CIF">CIF o NIF</label>
								<input
									id="CIF"
									type="text"
									className="form-control form-fixer form-fixer"
									placeholder="CIF o NIF"
									onChange={e => setCifNumber(e.target.value)}
								/>
							</div>
							<div className="col">
								<label htmlFor="nombre-empresa">Nombre de la empresa</label>
								<input
									id="nombre-empresa"
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la empresa"
									onChange={e => setEnterpriseName(e.target.value)}
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="email"
									className="form-control form-fixer"
									placeholder="Email"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="col">
								<label htmlFor="telefono">Teléfono</label>
								<input
									id="telefono"
									type="text"
									className="form-control form-fixer"
									placeholder="Teléfono"
									onChange={e => setPhone(e.target.value)}
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="address">Dirección</label>
								<input
									id="address"
									type="text"
									className="form-control form-fixer"
									placeholder="Dirección"
									onChange={e => setAddress(e.target.value)}
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="contraseña">Contraseña</label>
								<input
									id="contraseña"
									type="password"
									className="form-control form-fixer"
									placeholder="Contraseña"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="col">
								<label htmlFor="confirmar-contraseña">Confirma tu contraseña</label>
								<input
									id="confirmar-contraseña"
									type="password"
									className="form-control form-fixer"
									placeholder="Confirma contraseña"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="nombre-marca">Nombre de la marca</label>
								<input
									id="nombre-marca"
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la marca"
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
											actions.addEnterprise(
												brandLogo,
												CifNumber,
												enterpriseName,
												email,
												phone,
												address,
												password,
												brandName,
												justEatApiKey,
												glovoApiKey,
												isAdmin
											);
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
