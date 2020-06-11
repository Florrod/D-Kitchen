import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registerForm.scss";

export const RegisterForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<form className="container">
			<div className="form-row">
				<div className="col">
					<h2 className="text-center titleForm">
						Formulario <p>de Registro</p>
					</h2>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-6">
					<label className="labelRegister" htmlFor="exampleInputPassword1">
						CIF o NIF
					</label>
					<input
						type="text"
						className="form-control input-lg"
						id="exampleInputPassword1"
						placeholder="Escribe el CIF"
					/>
				</div>
				<div className="col-6">
					<label className="labelRegister" htmlFor="exampleInputEmail1">
						NOMBRE DE LA EMPRESA
					</label>
					<input
						type="text"
						className="form-control input-lg"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Escribe el nombre de la empresa"
					/>
				</div>
			</div>
			<div className="form-group">
				<label className="labelRegister" htmlFor="exampleInputPassword1">
					CORREO ELECTRÓNICO
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Escribe el Correo Electrónico"
				/>
			</div>
			<div className="form-group">
				<label className="labelRegister" htmlFor="exampleInputPassword1">
					NOMBRE DE LA MARCA
				</label>
				<input
					type="password"
					className="form-control input-lg"
					id="exampleInputPassword1"
					placeholder="Escribe el Nombre de la Marca"
				/>
			</div>
			<div className="form-group">
				<label className="labelRegister" htmlFor="exampleInputPassword1">
					CONTRASEÑA
				</label>
				<input
					type="password"
					className="form-control input-lg"
					id="exampleInputPassword1"
					placeholder="Escribe la contraseña"
				/>
			</div>
			<div className="form-group">
				<label className="labelRegister" htmlFor="exampleInputPassword1">
					TELÉFONO
				</label>
				<input
					type="password"
					className="form-control input-lg"
					id="exampleInputPassword1"
					placeholder="Escribe el CIF"
				/>
			</div>
			<div className="form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
