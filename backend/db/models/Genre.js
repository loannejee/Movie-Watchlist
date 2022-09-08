const Sequelize = require('sequelize');
const db = require('../db');

const Genre = db.define('genre', {
    name: {
        // helps your db pick the right size bucket so it works faster 
        type: Sequelize.STRING(100),
        allowNull: false,
    },
})

module.exports = Genre;