const BASE_URL = "https://connections-api.herokuapp.com";

export async function register(data) {
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

export async function login(data) {
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

export async function refresh(data) {
  const respose = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data}`,

      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
  return respose;
}

export async function logout(data) {
  const respose = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data}`,
    },
  }).then((response) => {
    return response.json();
  });
  return respose;
}

export async function getContacts() {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  }).then((response) => {
    return response.json();
  });

  return response;
}

export async function addContact(contact) {
  console.log(contact);
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
      "Content-Type": "application/json",
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

export async function removeContact(id) {
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
