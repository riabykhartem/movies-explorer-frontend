class MainApi{
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }).then((res) => this._checkResponse(res))
      }

    signUp(data){
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse)
    }

    signIn(data){
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse)
    }

    editProfile(data, token){
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    url: 'https://api.movies-explorer2023.nomoredomainsmonster.ru',
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
});
export default mainApi;