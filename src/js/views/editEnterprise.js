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

	// if (enterpriseEdited === true) {
	// 	return <Redirect to="/companyList" />;
	// } else if (enterpriseEdited === false) {
	// 	return <Redirect to="/companyList" />;
	// }

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
					<Link to={"/companyList"}>
						<button
							type="button"
							className="btn buttom form-control m-2"
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
							Guardar
						</button>
					</Link>
					<Link className="mt-5 w-100 text-center" to="/companyList">
						Volver
					</Link>
				</form>
			</div>
		</div>
	);
};

EditEnterprise.propTypes = {
	match: PropTypes.object
};
