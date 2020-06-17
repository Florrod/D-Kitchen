import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/uploadProfile.scss";
import "../../styles/home.scss";

export const UploadProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col">
				<div className="avatar-upload">
					<div className="avatar-edit">
						<input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
						<label htmlFor="imageUpload">
							<i className="fas fa-pencil-alt m-2" />
						</label>
					</div>
					<div className="avatar-preview">
						<div
							id="imagePreview"
							style={{
								backgroundImage:
									"url(https://media.istockphoto.com/vectors/chef-cook-avatar-profile-icon-flat-vector-illustration-vector-id635975552?k=6&m=635975552&s=170667a&w=0&h=TM1hPTQEAoJl-XjzH_wqTxySeEY4M1LWkELzEGEtkmc="
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
