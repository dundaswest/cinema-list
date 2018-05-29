// import $ from "jquery";
import axios from 'axios';
import apiKey from './src/config/config.js';

const searchMovies = (query, callback) => {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  axios.get(settings.url)
    .then(function (response) {
      //res.send(response.data.results[0]);
      console.log('HIROO',response.data.results[0]);
      let target = response.data.results[0];
      let movie = {
        title:target.title,
        release_date:target.release_date,
        overview: target.overview,
        vote_average: target.vote_average
      }
      axios.post('/movie', movie)
      .then((response) => {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
      callback(null, movie);
    })
    .catch(function (error) {
      console.log(error);
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
