const express = require('express');

//Database client
let db = require('../secret/postgresql');
//Router.
const router = express.Router();

function GET_USER(userID) {
    let query = 'SELECT * FROM public.users WHERE id=$1'
    let value = [userID]
    let returnUser;
    db.query(query, value)
        .then(result => {
            returnUser = result,
            console.log(result)
        })
        .catch(e => console.error(e.stack))
        .then(() => db.end())
    return returnUser;
}



//ROUTES
router.get('/user/:id', (req, res) => {
    res.send(GET_USER(req.params.id));

});

module.exports = router;