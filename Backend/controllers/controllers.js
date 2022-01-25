const router = require("express").Router();
var unirest = require('unirest');
const connection = require("../connection")

var req = unirest('GET', 'https://imdb-api.com/en/API/MostPopularMovies/k_v06q92bi')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    
  });