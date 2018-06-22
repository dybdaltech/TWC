const express = require('express');

//Database client
let db = require('../secret/postgresql');
//Router.
const router = express.Router();

router.post('/query', (req, res) => {
    let query = req.body.query;

    db.query(query)
        .then((result) => {
            res.status(200)
                .json({
                    status: 'Success',
                    data: result.rows,
                    message: 'Query done.'
                })
        })
        .catch((err) => {
            return next(err);
        });
    console.log(query);
});


module.exports = router;