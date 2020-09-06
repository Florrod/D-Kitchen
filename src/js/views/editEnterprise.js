import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect, useRouteMatch, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const EditEnterprise = props => {
	const { store, actions } = useContext(Context);
	// const match = useRouteMatch();
	const [id, setId] = useState("");
	const [editName, setName] = useState("");
	const [editCifNumber, setCifNumber] = useState("");
	const [editAddress, setAddress] = useState("");
	const [editEmail, setEmail] = useState("");
	const [editPhone, setPhone] = useState("");
	const [editPassword, setPassword] = useState("");
	const [editIsActive, setIsActive] = useState(false);
	// const [enterpriseEdited, setEnterpriseEdited] = useState(false);

	useEffect(() => {
		actions.getEnterprisesWithBrands();
		console.log("running useEffect enterprises", store.allData);
		for (let enterprise of store.allData) {
			console.log("checking > ", enterprise);
			if (enterprise.id == props.match.params.enterpriseid) {
				console.log("found it!");
				setId(enterprise.id);
				setName(enterprise.name);
				setCifNumber(enterprise.CIF_number);
				setAddress(enterprise.address);
				setEmail(enterprise.email);
				setPhone(enterprise.phone);
				setPassword(enterprise.password);
				setIsActive(enterprise.is_active);
				// setEnterpriseEdited(true);
			}
			break;
		}
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edita tu empresa</h1>
				<form>
					<div className="form-group">
						<label>Nombre</label>
						<input
							type="text"
							className="form-control"
							value={editName}
							onChange={e => setName(e.target.value)}
							placeholder="Introduce tu nombre"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Introduce tu email"
							defaultValue={editEmail}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Teléfono</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Introduce tu teléfono"
							defaultValue={editPhone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Contraseña</label>
						<input
							type="text"
							className="form-control"
							placeholder="Introduce tu nueva contraseña"
							defaultValue={editPassword}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Dirección</label>
						<input
							type="text"
							className="form-control"
							placeholder="Introduce tu dirección"
							defaultValue={editAddress}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<div className="row justify-content-center mt-3 mb-2">
						<Link to={"/companyList"}>
							<div className="col">
								<button
									className="btn"
									onClick={() => {
										actions.editEnterprise(
											id,
											editName,
											editCifNumber,
											editPassword,
											editPhone,
											editEmail,
											editAddress,
											editIsActive
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
				</form>
			</div>
		</div>
	);
};

EditEnterprise.propTypes = {
	match: PropTypes.object
};
