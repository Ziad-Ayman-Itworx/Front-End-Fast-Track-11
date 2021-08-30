import { Movie } from './models';
import { apiKey } from '../api-credentials.json';

const apiUrl = "https://api.themoviedb.org/3";

var imagesBaseUrl;
var backdropPreferredWidth;
var posterPreferredWidth;
var genres;

function getJSON(endpoint) {
    return fetch(`${apiUrl}/${endpoint}?api_key=${apiKey}`).then(response => response.json());
}

export function init() {
    return Promise.all([
        getJSON("configuration").then(result => {
            imagesBaseUrl = result.images.base_url;
            backdropPreferredWidth = result.images.backdrop_sizes.find(s => parseInt(s.substring(1)) >= 1200);
            posterPreferredWidth = result.images.poster_sizes.find(s => parseInt(s.substring(1)) >= 180);
        }),
        getJSON("genre/movie/list").then(result => { genres = result.genres; })
    ]);
}

function getMovies(endpoint) {
    return getJSON(endpoint).then(result => result.results.map(rawMovie => new Movie(
        rawMovie.id,
        rawMovie.title,
        imagesBaseUrl.concat(backdropPreferredWidth).concat(rawMovie.backdrop_path),
        imagesBaseUrl.concat(posterPreferredWidth).concat(rawMovie.poster_path),
        genres.filter(g => rawMovie.genre_ids.includes(g.id)).map(g => g.name))));
}

export function getNowPlayingMovies() {
    return getMovies("movie/now_playing");
}

export function getTopRatedovies() {
    return getMovies("movie/top_rated");
}

export function getTrendingMovies() {
    return getMovies("movie/popular");
}