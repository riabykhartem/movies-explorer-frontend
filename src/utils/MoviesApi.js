class MoviesApi {
  constructor(options) {
    this._url = options.url;
  }
  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject();
  }

  getMovies() {
    return fetch("https://api.nomoreparties.co/beatfilm-movies").then((res) =>
      this._getResponseData(res)
    );
  }

  saveMovie(movie, token) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: `${movie.trailerLink}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  removeSavedMovie(movieId, token){
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  
  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.artemriabykh.nomoredomainsmonster.ru",
});

export default moviesApi;
