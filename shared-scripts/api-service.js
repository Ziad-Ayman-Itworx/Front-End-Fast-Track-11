const fetch = require('node-fetch');
const models = require("./models");
const apiCredentials = require("../api-credentials.json");

const apiUrl = "https://api.themoviedb.org/3/movie";

function getJSON(endpoint) {
    return fetch(`${apiUrl}/${endpoint}?api_key=${apiCredentials.apiKey}`).then(response => response.json());
}

function getMovies(endpoint) {
    return getJSON(endpoint).then(result => result.results.map(rawMovie => new models.Movie(rawMovie)));
}

function getNowPlayingMovies() {
    return getMovies("now_playing");
}

function getTopRatedovies() {
    return getMovies("top_rated");
}

function getTrendingMovies() {
    return getMovies("popular");
}

exports.getNowPlayingMovies = getNowPlayingMovies;
exports.getTopRatedovies = getTopRatedovies;
exports.getTrendingMovies = getTrendingMovies;