const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: ""
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

			getPlatforms: platform_id => {
				let access_token = localStorage.getItem("access_token");
				return fetch(`${ENDPOINT}/integration/platform`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`
					}
				})
					.then(platform_json => {
						platforms = platform_json;
						return platforms;
					})
					.then(platforms => {
						for (let i = 0; i < platforms.length; i++) {
							let top_five_products = getTopProducts();
						}
						setPlatforms(response);
						console.log(response);
					});
			},

			getTopProducts: platform_id => {
				let access_token = localStorage.getItem("access_token");
				return fetch(`${ENDPOINT}/top-product/${platform_id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${access_token}`
					}
				})
					.then(res => res.json())
					.then(response => {
						setProducts(response);
						console.log(response);
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
