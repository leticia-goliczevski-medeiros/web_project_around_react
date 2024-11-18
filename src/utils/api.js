class API {
  constructor({ makeRequest, headers }) {
    this._makeRequest = makeRequest;
    this._headers = headers;
  }
  getUser() {
    const endpoint = 'users/me';
    const requestOptions = {
      method: "GET",
      headers: this._headers,
    }
    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }); */
  }
  getInitialCards() {
    const endpoint = 'cards';
    const requestOptions = {
      method: "GET",
      headers: this._headers,
    }
    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }); */
  }
  saveProfileInfo(name, about) {
    const endpoint = 'users/me';
    const requestOptions = {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      })
    }

    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }); */
  }

  addCard(name, link) {
    const endpoint = 'cards';
    const requestOptions = {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }

    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }); */
  }
  addCardLike(item, cardId) {
    const endpoint = `cards/:${cardId}/likes`;
    const requestOptions = {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(item),
    }

    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/cards/:${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(item),
    }); */
  }

  removeCardLike(item, cardId) {
    const endpoint = `cards/:${cardId}/likes`;
    const requestOptions = {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({ item }),
    }

    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/cards/:${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({ item }),
    }); */
  }

  deleteCard(cardId) {
    const endpoint = `cards/:${cardId}`;
    const requestOptions = {
      method: "DELETE",
      headers: this._headers,
    }

    return this._makeRequest(endpoint, requestOptions)

    /* return fetch(`${this._baseUrl}/cards/:${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }); */
  }
  updateProfilePicture(avatar) {
    const endpoint = `users/me/avatar`;
    const requestOptions = {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }

    return this._makeRequest(endpoint, requestOptions)

   /*  return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }); */
  }
}



export const api = new API({
  makeRequest: (endpoint, requestOptions)=> {
    return fetch(`https://around-api.pt-br.tripleten-services.com/v1/${endpoint}`, requestOptions)
  },
  headers: {
    authorization: "46bfb3be-dbce-4d6f-9db9-127f775222d9",
    "Content-Type": "application/json",
  },
});