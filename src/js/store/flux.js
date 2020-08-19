const url_base = "https://3000-a2433010-e316-4209-8d0e-d0eb6549d9be.ws-eu01.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			allEnterprises: [],
			allBrands: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			logout: () => {
				const store = getStore();
				setStore({ token: null });
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
			getAllEnterprises: () => {
				const currentStore = getStore();
				let url = url_base + "/enterprise";
				console.log(url);
				let access_token = localStorage.getItem("access_token");
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`,
						"Access-Control-Allow-Origin": "*"
					}
				})
					.then(res => res.json())
					.then(data => {
						if (data.msg != null) {
							alert(data.msg);
						} else {
							setStore({
								allEnterprises: data
							});
						}
					})
					.catch(e => console.error(e));
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
							allData: enterprises
						});
					});
			},

			editEnterprise(id, editCifNumber, editAddress, editEmail, editIsActive, editName, editPhone, editPassword) {
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
						phone: editPhone,
						email: editEmail,
						address: editAddress,
						CIF_number: editCifNumber,
						is_active: editIsActive,
						password: editPassword
					})
				})
					.then(res => res.json())
					.then(data => {
						/*setStore({
							allEnterprises: data
						});
						let store = getStore();
						let enterprises = store.allEnterprises;
						console.log(enterprises);*/
					})
					.catch(e => console.error(e));
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
