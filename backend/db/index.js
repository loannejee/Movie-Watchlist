//this is the access point for all things database related!
const db = require('./db');
const Movie = require('./models/Movie');
const Genre = require('./models/Genre');

// associations could go here!
// for reference: https://sequelize.org/docs/v6/core-concepts/assocs/
// making the third table
Movie.belongsToMany(Genre, { through: 'MoviesGenres' });
Genre.belongsToMany(Movie, { through: 'MoviesGenres' });

module.exports = {
    db,
    Movie,
    Genre
};