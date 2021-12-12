const BASE_URL = "https://connections-api.herokuapp.com";

export async function registerFetch(data) {
  const respose = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
  return JSON.parse(respose);
}

export async function loginFetch(data) {
  const respose = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
  return respose;
}

export async function refreshFetch(data) {
  const respose = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    // body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${data}`,

      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
  return respose;
}

export async function getContactsFetch() {
  const response = await fetch(BASE_URL).then((response) => {
    return response.json();
  });

  return response;
}

export async function removeContactsFetch(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    body: JSON.stringify(id),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return response;
}

export async function addContactFetch(contact) {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return response;
}
