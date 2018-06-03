const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const app = express();

app.get('/scrape', function (req, res) {
  console.log('Scraping');
})

app.listen(8081)

console.log('Running on port 8081');

exports = module.exports = app;
