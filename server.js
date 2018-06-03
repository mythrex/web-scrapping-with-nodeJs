const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const app = express();

app.get('/scrape', function (req, res) {
  url = 'https://www.imdb.com/title/tt1837492/'

  //make request to url
  request(url, function (error, res, html) {
    if(!error){

      //load the html into cherio
      var $ = cheerio.load(html)
      var title, release, rating;

      var json = {
        title: "",
        release: "",
        rating: ""
      }
      
    }
  })
})

app.listen(8081)

console.log('Running on port 8081');

exports = module.exports = app;
