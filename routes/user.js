const express = require('express');

//Database client
let db = require('../secret/postgresql');
//Router.
const router = express.Router();

//Get a single user with an ID.
function GET_USERa(userID) {
    let query = 'SELECT * FROM public.users WHERE id=$1'
    let value = [userID]
    let returnUser;
    db.query(query, value)
        .then(result => {
            return result.rows[0],
            console.log(result)
        })
        .catch(e => console.error(e.stack))
        .then(() => db.end())
}


//ROUTES
/*
    Gets a single user. 
*/
router.get('/user/:id', (req, res) => {
    let query = 'SELECT * FROM public.users WHERE id=$1';
    let value = [req.params.id]

    db.query(query, value)
        .then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    data: result.rows[0],
                    message: 'User retrieved'
                });
        })
        .catch((err) => {
            return next(err);
        });
});
/*
    Gets all users
*/
router.get('/users', (req, res) => {
    let query = 'SELECT * FROM public.users';

    db.query(query)
        .then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    data: result.rows,
                    message: 'All users retrieved'
                });
        })
        .catch((err) => {
            return next(err);
        })
})


/*
    New user route
*/
router.post('/user/new', (req, res) => {
    let query = 'INSERT INTO users(accountName, name, email, create_ip, created) VALUES($1, $2, $3, $4, $5)'
    const values = [req.body.accountname, req.body.name, req.body.email, req.body.create_ip, req.body.createDate];
    //Insert it in the Database
    db.query(query, values)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err);
        })
    //
    res.sendStatus(200);
})

router.post('/user/new/password', (req, res) => {
    let query = 'INSERT INTO secrets(userID, password) VALUES($1, $2)'
    let values = [req.body.userID, req.body.password];

    db.query(query, values)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err);
        });
})
module.exports = router;