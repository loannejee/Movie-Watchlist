const router = require('express').Router();

// GET /api/movie

module.exports = router;


/* 
Lessons:

Issue:
TypeError: Router.use() requires middleware function but got a Object

Solution:
Check and verify all your JS pages has "module.exports = router"
*/