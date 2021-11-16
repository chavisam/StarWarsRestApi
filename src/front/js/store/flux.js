const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			token: null,
			//we create the variable for favorites
			favorites: 0,
			//we create variable Characters
			nextpeople: null,
			nextplanets: null,
			nextstarships: null,
			previouspeople: null,
			previousplanets: null,
			previousstarships: null,

			people: [],
			planets: [],
			starships: [],
			characterData: {}
		},
		actions: {
			//message
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			// LOGOUT
			logout: () => {
				localStorage.removeItem("token"), setStore({ token: null });
			},

			//we use the starwars API
			loadData: type_info => {
				const store = getStore();
				const options = {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				};

				fetch(`https://www.swapi.tech/api/${type_info}`, options)
					//fetch(process.env.BACKEND_URL + `/${type_info}`, options)
					.then(response => {
						//console.log(response.ok);
						console.log(response.status);
						return response.json();
					})
					.then(data => {
						setStore({ [type_info]: data.results });
						setStore({ ["next" + type_info]: data.next });
					})
					.catch(error => console.error(error));
			},

			//function to see 10 more
			ten_more: data => {
				const store = getStore();

				let uri = store[`next${data}`];

				fetch(uri)
					.then(response => {
						console.log(response.status);
						return response.json();
					})
					.then(resp => {
						console.log(resp.results);
						setStore({ [data]: resp.results });
						setStore({ ["next" + data]: resp.next });
						setStore({ ["previous" + data]: resp.previous });
					})
					.catch(error => console.error(error));
			},

			//function to see 10 PREVIOUS
			ten_previous: data => {
				const store = getStore();

				let uri = store[`previous${data}`];

				fetch(uri)
					.then(response => {
						console.log(response.status);
						return response.json();
					})
					.then(resp => {
						console.log(resp.results);
						setStore({ [data]: resp.results });
						setStore({ ["next" + data]: resp.next });
						setStore({ ["previous" + data]: resp.previous });
					})
					.catch(error => console.error(error));
			},

			//FUNCTION TO FETCH A CHARACTER DATA
			getCharacterData: (id, type) => {
				const store = getStore();
				setStore({ characterData: {} });

				const options = {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				};
				fetch(`https://www.swapi.tech/api/${type}/${id}`, options)
					.then(response => {
						console.log(response.status);
						return response.json();
					})
					.then(resp => {
						setStore({ characterData: resp });
					})
					.catch(error => console.error(error));
			},

			//FUNCTION TO CREATE TOKEN
			generate_token: async (email_received, password_received) => {
				const resp = await fetch(process.env.BACKEND_URL + "/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email_received, password: password_received })
				});

				if (resp.status === 401) {
					//throw "Invalid credentials";
					setStore({ message: "Invalid e-mail or Password!" });
				} else if (resp.status === 400) {
					setStore({ message: "Invalid email or password format!" });
				}
				const data = await resp.json();

				// save your token in the localStorage
				//also you should set your user into the store using the setStore function
				localStorage.setItem("token", data.access_token);

				setStore({ token: data.token });

				return data;
			}
		}
	};
};

export default getState;
