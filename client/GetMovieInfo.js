// import $ from "jquery";
import axios from 'axios';
import apiKey from './src/config/config.js';

const searchMovies = (query, successCallback, failureCallback) => {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  axios.get(settings.url)
    .then(response => {
      const firstMovie = response.data.results[0];
      const movieObject = {
        title:firstMovie.title,
        release_date:firstMovie.release_date,
        overview: firstMovie.overview,
        vote_average: firstMovie.vote_average
      }

      successCallback(movieObject);
    })
    .catch(error => {
      failureCallback(error);
    });
  

/*
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

  $.ajax({
    method: "GET",
    url: settings.url,
  }).done(function( msg ) {
   console.log('data', msg.results[0]);
  });
  */
};

export default searchMovies;
