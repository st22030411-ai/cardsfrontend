class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  updateLike(cardid) {
    return fetch(`${this._baseUrl}/updateLike/${cardid}`, {
      method: "PATCH",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  deleteCard(cardid) {
    return fetch(`${this._baseUrl}/deleteCard/${cardid}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  getAllCards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/createCard`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleServerResponse);
  }
}
const api = new Api({
  baseUrl: "https://cardsbackend-1-b8ms.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});


export default api;
