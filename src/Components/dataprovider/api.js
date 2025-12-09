class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handserveresponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  updateLike(cardid) {
    return fetch(`${this._baseUrl}/updateLike/${cardid}`, {
      method: "PATCH",
      headers: this._headers,
    }).then(this._handserveresponse);
  }

  deleteCard(cardid) {
    return fetch(`${this._baseUrl}/delateCards/${cardid}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handserveresponse);
  }
  getAllCards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      headers: this._headers,
    }).then(this._handserveresponse);
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handserveresponse);
  }
}



const api = new Api({
  baseUrl: "https://cardsbackend-1-b8ms.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});


export default api;
