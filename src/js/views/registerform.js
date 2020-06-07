import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Registerform = () => (
	<div className="text-center mt-5 ">
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="inputEmail4">Correo electrónico</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="inputPassword4">Contraseña</label>
					<input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="inputAddress">Nombre</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
			</div>
			<div className="form-group">
				<label htmlFor="inputAddress2">Teléfono</label>
				<input
					type="text"
					className="form-control"
					id="inputAddress2"
					placeholder="Apartment, studio, or floor"
				/>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="inputCity">Ciudad</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="form-group col-md-2">
					<label htmlFor="inputZip">NIF o CIF</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
			</div>
			<div className="custom-file">
				<input type="file" className="custom-file-input" id="validatedCustomFile" required />
				<label className="custom-file-label" htmlFor="validatedCustomFile">
					Elige tu imagen
				</label>
				<div className="invalid-feedback">Example invalid custom file feedback</div>
			</div>
			<div className="form-group">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" id="gridCheck" />
					<label className="form-check-label" htmlFor="gridCheck">
						Check me out
					</label>
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Sign in
			</button>
		</form>
	</div>
);
