var request = require('request');
var cheerio = require('cheerio');

request('https://www.imdb.com/chart/moviemeter', function(err, res, body) {
    if (err) console.log('Erro:', err);

    var $ = cheerio.load(body);
    var titulo = $('.lister-list > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1)').first().html();
    console.log('titulo: ', titulo);
});