const Sequelize = require('sequelize');
const db = require('../db');

const Movie = db.define('movie', {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    imdbLink: {
        type: Sequelize.STRING(1000),
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
    watched: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
})

module.exports = Movie;