// Sequelize is an open-source Node.js module (encapsulated code) that enables JavaScript 
// developers to work with relational databases more easily such as PostgreSQL.
const Sequelize = require('sequelize');
require("dotenv").config();

// Option 1: Passing a connection URI
const db = new Sequelize(`${process.env.DATABASE_URI}`)

// ==========================================================================
// const test = async () => {
//     try {
//         await db.authenticate();
//         console.log('✔️ Connection has been established successfully.');
//     } catch (error) {
//         console.error('❌ Unable to connect to the database:', error);
//     }
// }

// test()
// ==========================================================================

module.exports = db;