var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected from db')
});

var movieSchema = mongoose.Schema({
  title: {
    type:String,
    unique: true,
    index: true
  },
  release_date:String,
  overview: String,
  vote_average: Number 
});

var Movie = mongoose.model('Movie',movieSchema);

var addMovie = function(data,cb) {
  Movie.create(data,function(err,data){
    if(err) {
      cb(err,null);
    } else {
      cb(null,data);
      console.log('data saved')
    }
  });
}

var fetchMovie = function(cb) {
  Movie.find({},function(err,data){
    if(err) {
      console.log(err);
      cb(err,null);
    } else {
      cb(null,data);
    }
  }).sort({vote_average:1}).limit(5);
}

module.exports.addMovie = addMovie;
module.exports.fetchMovie = fetchMovie;
/*let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name : String,
  owner: String,
  url: String,
  private: Boolean,
  avatarURL: String,
  description: String,
  githubID: {
  	type: Number,
  	unique: true,
  	index: true
  }
});*/
