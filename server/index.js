const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); 

app.post('/movie', (req, res) => 
  db.addMovie(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      res.send(data);
    }
}))

app.get('/movie',(req,res) => 
  db.fetchMovie(function(err,data){
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
)


app.listen(3000, () => console.log('Example app listening on port 3000!'));
