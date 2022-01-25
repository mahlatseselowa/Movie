const router = require("express").Router();
var unirest = require('unirest');
const connection = require("../connection")

var req = unirest('GET', 'https://imdb-api.com/en/API/MostPopularMovies/k_v06q92bi')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    var arrayTitle = [];
    var arrayYear = [];
    var arrayRating = [];
    var arrayCrew = [];
    var arrayImages = [];
    var sizeArray = res.body.items.length;

    for(let x = 0; x < sizeArray; x++)
    {
        var title = res.body.items[x].title;
        let year = res.body.items[x].year;
        let rating = res.body.items[x].imDbRating;
        let crew = res.body.items[x].crew.split(',');
        let image = res.body.items[x].image;
        
        arrayTitle[x] =  title;
        arrayYear[x] = year;
        arrayRating[x] = rating;
        arrayCrew[x] = crew;
        arrayImages[x] = image;
    }
  });

router.use("/api/movies", router);

router.post("/movie", (req, res) => {
    for(let i = 0; i < sizeArray; i++)
    {
        let name = arrayTitle[i];
        let release = arrayYear[i];
        let rate = arrayRating[i];
        let sql = "INSERT INTO trending trending(title, ratings, year) VALUES($1, $2, $3) RETURNING *";
        const values = [name, rate, release];
        
        connection.query(sql, values, (err, result) => {
            if(!err)
            {
                res.send("Successfully sent data");
            }
            else
            {
                console.log(err.message);
            }
        });
        connection.end;
    }
    
});
