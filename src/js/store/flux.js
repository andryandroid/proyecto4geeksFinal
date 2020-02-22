const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuario: [],
			eventos: [],
			loggedIn: false,
			error: null
		},
		actions: {
			get: (url, propiedad) => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			},
			post: (url, propiedad, update) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						console.log(resp);
						if (resp.status === 404)
							alert("Usuario o contraseña inconrrecta");
						else
							return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						alert(error);
					});
			},
			postUser: (url, propiedad, update) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						console.log(resp);
						if (resp.status === 404)
							alert("Usuario o contraseña inconrrecta");
						else
							return resp.json();
					})
					.then(data => {
						console.log(data);

						if (data.msg) {
							setStore({
								error: data.msg
							})
						} else {
							var obj = data;
							setStore({ 
								[propiedad]: obj,
								loggedIn: true,
								error: null
							 });
						}
					})
					.catch(error => {
						alert(error);
					});
			},
			put: (url, propiedad, update) => {
				fetch(url, {
					method: "PUT",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			},
			delete: (url, propiedad) => {
				fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;


