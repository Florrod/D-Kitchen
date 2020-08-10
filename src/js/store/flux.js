const url_base = "https://3000-a32a2cb8-df3f-46cd-86d1-360b668071f5.ws-eu01.gitpod.io/";

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
						setStore({
							allEnterprises: data
						});
						let store = getStore();
						let enterprises = store.allEnterprises;
						console.log(enterprises);
					})
					.catch(e => console.error(e));
			},
			editEnterprise(id, editCifNumber, editAddress, editEmail, editIsActive, editName, editPhone, editPassword) {
				fetch(`${url_base}/enterprise/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: editName,
						phone: editPhone,
						email: editEmail,
						address: editAddress,
						CIF_number: editCifNumber,
						is_active: editIsActive,
						password: editPassword
					})
				}).then(() => {
					const currentStore = getStore();
					fetch(`${url_base}/enterprise/${id}`)
						.then(res => res.json())
						.then(data => {
							setStore({
								allEnterprises: data
							});
							let store = getStore();
							let enterprises = store.allContacts;
							console.log(contact);
						})
						.catch(e => console.error(e));
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
