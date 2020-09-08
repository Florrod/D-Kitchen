const url_base = "https://3000-e235e552-6019-4406-9dae-b6e1d0b739af.ws-eu01.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			admin: false,
			token: "",
			allData: [],
			currentEnterprise: null,
			currentBrand: null,
			loggedIn: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			logout: () => {
				const store = getStore();
				setStore({ token: "" });
				setStore({ loggedIn: false });
				localStorage.removeItem("access_token");
				console.log("iiiiiii", localStorage);
			},
			navBrandId: brandId => {
				setStore({ brandId: brandId });
			},
			setToken: token => {
				setStore({ token: token });
			},
			setAdmin: admin => {
				setStore({ admin: admin });
			},

			setBrand: brand => {
				setStore({ currentBrand: brand });
			},

			getEnterprisesWithBrands: () => {
				let access_token = localStorage.getItem("access_token");
				return fetch(`${url_base}/enterprise/brands`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					}
				})
					.then(res => res.json())
					.then(enterprises => {
						setStore({
							allData: enterprises,
							currentEnterprise: enterprises[0]
							// currentBrand: enterprises[0].brand_id[0]
						});
					});
			},

			editEnterprise(id, editName, editCifNumber, editPassword, editPhone, editEmail, editAddress, editIsActive) {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/enterprise/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					},
					body: JSON.stringify({
						id: id,
						name: editName,
						CIF_number: editCifNumber,
						password: editPassword,
						phone: editPhone,
						email: editEmail,
						address: editAddress,
						is_active: editIsActive
					})
				})
					.then(res => res.json())
					.then(enterprise => {
						let store = getStore();
						let enterprises = store.allData;
						setStore({
							allData: enterprises.filter(e => e.id != enterprise.id).concat(enterprise) // Cuando cambia un valor del id se añade la empresa de nueva
						});
					})
					.catch(e => console.error(e));
			},

			addEnterprise(
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
			) {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/add-enterprise`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					},
					body: JSON.stringify({
						logo: brandLogo,
						CIF_number: CifNumber,
						enterprise_name: enterpriseName,
						password: password,
						phone: phone,
						email: email,
						address: address,
						brand_name: brandName,
						API_key: { JE: justEatApiKey, GL: glovoApiKey },
						is_admin: isAdmin
					})
				}).then(() => {
					fetch(`${url_base}/enterprise`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${access_token}`,
							"Access-Control-Allow-Origin": "*"
						}
					})
						.then(response => response.json())
						.then(updateData => {
							console.log("lalalalalalalal", updateData);
							setStore({ allData: updateData });
						})
						.catch(e => console.error("deleteeee", e));
				});
			},

			deleteEnterprise: id => {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/enterprise/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					}
				}).then(() => {
					fetch(`${url_base}/enterprise`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${access_token}`,
							"Access-Control-Allow-Origin": "*"
						}
					})
						.then(response => response.json())
						.then(deleteData => {
							console.log("lalalalalalalal", deleteData);
							setStore({ allData: deleteData });
						})
						.catch(e => console.error("deleteeee", e));
				});
			},

			addBrand(brandName, justEatApiKey, glovoApiKey, enterpriseId) {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/add-brand`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					},
					body: JSON.stringify({
						// logo: brandLogo,
						enterprise_id: enterpriseId,
						name: brandName,
						API_key: { JE: justEatApiKey, GL: glovoApiKey }
					})
				}).then(() => {
					fetch(`${url_base}/enterprise/brands`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${access_token}`,
							"Access-Control-Allow-Origin": "*"
						}
					})
						.then(response => response.json())
						.then(updateBrand => {
							console.log("lalalalalalalal", updateBrand);
							setStore({ allData: updateBrand });
						})
						.catch(e => console.error("updateBrand", e));
				});
			},

			editBrand(id, editName, apiKeys) {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/edit-brand/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					},
					body: JSON.stringify({
						id: id,
						// logo: editLogo,
						name: editName,
						API_key: apiKeys
					})
				})
					.then(res => res.json())
					.then(brand => {
						let store = getStore();
						let enterprises = store.allData;
						setStore({
							allData: enterprises.map(e => {
								if (e.id == brand.enterprise_id) {
									return {
										...e,
										brand_id: e.brand_id.filter(e => e.id != brand.id).concat(brand)
									};
								} else return e;
							}) // Cuando cambia un valor del id se añade la empresa de nueva
						});
					})
					.catch(e => console.error(e));
			},

			deleteBrand: id => {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/enterprise/brand/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					}
				}).then(() => {
					fetch(`${url_base}/enterprise/brands`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${access_token}`,
							"Access-Control-Allow-Origin": "*"
						}
					})
						.then(response => response.json())
						.then(deleteData => {
							console.log("lalalalalalalal", deleteData);
							setStore({ allData: deleteData });
						})
						.catch(e => console.error("deleteeee", e));
				});
			}
		}
	};
};

export default getState;
