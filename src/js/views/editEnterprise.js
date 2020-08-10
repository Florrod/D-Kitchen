import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const EditEnterprise = props => {
	const { store, actions } = useContext(Context);
	// const match = useRouteMatch();
	const [editName, setName] = useState("");
	const [editCifNumber, setCifNumber] = useState("");
	const [editAddress, setAddress] = useState("");
	const [editEmail, setEmail] = useState("");
	const [editPhone, setPhone] = useState("");
	const [editPassword, setPassword] = useState("");
	const [editIsActive, setIsActive] = useState(false);

	useEffect(
		() => {
			actions.getAllEnterprises();
			console.log("running useEffect", store.allEnterprises);
			for (let enterprise of store.allEnterprises) {
				console.log("checking > ", enterprise);
				if (enterprise.id == props.match.params.enterpriseid) {
					console.log("found it!");
					setName(enterprise.name);
					setCifNumber(enterprise.CIF_number);
					setAddress(enterprise.address);
					setEmail(enterprise.email);
					setPhone(enterprise.phone);
					setPassword(enterprise.password);
					setIsActive(enterprise.is_active);
				}
			}
		},
		[store.allEnterprises]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a existent contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							value={editName}
							onChange={e => setName(e.target.value)}
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={editEmail}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={editPhone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={editAddress}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editEnterprise(
									props.match.params.enterpriseid,
									editName,
									editCifNumber,
									editPassword,
									editPhone,
									editEmail,
									editAddress,
									editIsActive
								);
							}}>
							Update changes
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditEnterprise.propTypes = {
	match: PropTypes.object
};
