## Movie Watchlist App

This site will be a self-hosted application for one person to keep track of what movies they want to watch.

## :wrench: Technologies & Tools

![ExpressJS](https://img.shields.io/badge/Framework-Express.js-E51937?style=flat&logo=Express.js)
![NodeJS](https://img.shields.io/badge/Runtime-Node.js-E51937?style=flat&logo=Node.js)
![Sequelize](https://img.shields.io/badge/Module-Sequelize-E51937?style=flat&logo=Sequelize)
![PostgreSQL](https://img.shields.io/badge/DBMS-PostgreSQL-E51937?style=flat&logo=PostgreSQL)
![Javascript](https://img.shields.io/badge/Code-Javascript-E51937?style=flat&logo=Javascript)
![VisualStudioCode](https://img.shields.io/badge/Tool-VS%20Code-E51937?style=flat&logo=VisualStudioCode)

##### Features:
- Adding and removing movies to watchlist
- Creating and attaching genres (comedy, horror, etc) to each movie.
- Marking listed movies as "watched."
- Filtering the list by unwatched, genre.
- "I'm feeling lucky" button to get a random movie.

##### Architecture/Components:
- A Node.js program that will use Express to listen for HTTP messages.
- Within aforementioned server program, a Postgres database will be used to store movies and genres.
- Sequelize will be used to query, define and interact with the movies and genres table.
- The server will serve up HTML documents to render the user-facing portion of the application.
- Some CSS and front-end Javascript will be used to improve user experience in the browser.

##### Proposed task order (subject to change):
1. ✔️ Set up initial boilerplate for project (git setup, installing libraries, establishing basic routes, creating database).
2. ✔️ Defining models with Sequelize for movies and genres tables, and relating them.
    - Movie
    - Genre
3. ✔️ Defining a route to send back an HTML page with a form to create a genre.
4. Defining a route to send back an HTML page with a form to enter a new movie.
5. Defining a route to send back an HTML page with the list of movies in the database.
6. Adding functionality for setting a movie to "watched" and "unwatched"
7. Updating the movies listing routes to filter by genre and "unwatched"