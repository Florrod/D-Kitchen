const url_base = "https://3000-afee9549-6454-4158-a803-5e3e769585c3.ws-eu01.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			// allEnterprises: [],
			// allBrands: [],
			allData: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			logout: () => {
				const store = getStore();
				setStore({ token: null });
				localStorage.removeItem("access_token");
				console.log("iiiiiii", localStorage);
			},
			setToken: token => {
				setStore({ token: token });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// getAllEnterprises: () => {
			// 	const currentStore = getStore();
			// 	let url = url_base + "/enterprise";
			// 	console.log(url);
			// 	let access_token = localStorage.getItem("access_token");
			// 	fetch(url, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			Authorization: `Bearer ${access_token}`,
			// 			"Access-Control-Allow-Origin": "*"
			// 		}
			// 	})
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			if (data.msg != null) {
			// 				alert(data.msg);
			// 			} else {
			// 				setStore({
			// 					allEnterprises: data
			// 				});
			// 			}
			// 		})
			// 		.catch(e => console.error(e));
			// },

			// getAllBrands: () => {
			// 	const currentStore = getStore();
			// 	let url = url_base + "/enterprise/brand";
			// 	console.log(url);
			// 	let access_token = localStorage.getItem("access_token");
			// 	fetch(url, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			Authorization: `Bearer ${access_token}`,
			// 			"Access-Control-Allow-Origin": "*"
			// 		}
			// 	})
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			if (data.msg != null) {
			// 				alert(data.msg);
			// 			} else {
			// 				setStore({
			// 					allBrands: data
			// 				});
			// 			}
			// 		})
			// 		.catch(e => console.error(e));
			// },

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
						console.log("abbbbbb ->", enterprises);
						setStore({
							allData: enterprises
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
						console.log("aaaaa ->", enterprise);
						let store = getStore();
						let enterprises = store.allData;
						setStore({
							allData: enterprises.filter(e => e.id != enterprise.id).concat(enterprise) // Cuando cambia un valor del id se añade la empresa de nueva
						});

						// console.log(enterprises);
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

			addBrand(brandLogo, brandName, justEatApiKey, glovoApiKey) {
				let access_token = localStorage.getItem("access_token");
				fetch(`${url_base}/add-brand`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					},
					body: JSON.stringify({
						logo: brandLogo,
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
						console.log("aaaaa ->", brand);
						let store = getStore();
						let brands = store.allData;
						setStore({
							allData: brands.filter(e => e.id != brand.id).concat(brand) // Cuando cambia un valor del id se añade la empresa de nueva
						});

						// console.log(enterprises);
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
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
