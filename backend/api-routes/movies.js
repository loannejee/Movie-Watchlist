const router = require('express').Router();
const { Movie, Genre } = require('../db/index');


// GET /api-routes/movies/
router.get('/', async (req, res, next) => {
    res.send("This is a movie list");
});

// GET /api-routes/movies/add-movie
router.get('/add-movie', async (req, res, next) => {
    const allOfMyGenres = await Genre.findAll();
    // send the movie-form out:
    // fyi, __dirname is the path to this current file
    // res.sendFile(__dirname + "/views/movie-form.html")
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Add a movie to your watchlist</title>
    </head>
    <body>
        <h1>Add movie</h1>
        <form method="POST" action="/api-routes/movies">
            <div>
                <label>Title: </label>
                <input type="text" name="title"/>
            </div>
            <div>
                <label>IMDB link: </label>
                <input type="text" name="imdbLink" placeholder="Optional"/>
            </div>
            <div >
                <label>Genres: </label>
                <div id="genre-selects-container">
                    <select id="genre-select" name="genres">
                        <option></option>
                        ${
                            allOfMyGenres.map((genre) => {
                                return (
                                    `
                                    <option value=${genre.id}>${genre.name}</option>
                                    `
                                )
                            })
                        }
                    </select>
                </div>
                <button type="button" id="add-another-genre-button">+</button>
            </div>
            <button type="submit">Add Movie</button>
        </form>
        <script type="text/javascript" src="/movie-form.js"></script>
    </body>
    </html>
    `);
});

// POST /api-routes/movies
router.post('/', async (req, res, next) => {
    res.send("post route hi. is this working?")
    const title = req.body.title;
    const imdbLink = req.body.link;
    const attachedGenreIds = req.body.genres;

    try {
        // lowercase the new genre user has submitted:
        const newMovie = await Movie.create({
            title: title,
            imdbLink: imdbLink || null,
            // attachedGenreIds: attachedGenreIds,
        });
        // magic methods can be used because of the joined tables
        await newMovie.setGenres(attachedGenreIds);
        res.redirect("/api-routes/movies");

    } catch (err) {
        next(err);
    }
});

module.exports = router;


/* 
Lessons:

Issue:
TypeError: Router.use() requires middleware function but got a Object

Solution:
Check and verify all your JS pages has "module.exports = router"
*/