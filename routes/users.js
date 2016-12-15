var express = require('express');
var router = express.Router();
var userQuery = require('../db/usersqueries')
var carQuery = require('../db/carqueries')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    if (!isNaN(req.params.id)) {
        userQuery.getUser(req.params.id).then(user => {
            if (user) {
                delete user.password;
                res.json(user);
            } else {
                resError(res, 404, 'Bitch! That does not exist')
            }
        })
    } else {
        resError(res, 500, 'Quit Being Tricky')


    }
});

router.get('/:id/car', function(req, res, next) {
    if (!isNaN(req.params.id)) {
        carQuery.getCarsById(req.params.id).then(cars => {
            if (cars) {
                res.json(cars);
            } else {
                resError(res, 404, 'Bitch! That does not exist')
            }
        })
    } else {
        resError(res, 500, 'Quit Being Tricky')


    }
});


function resError(res, status, message) {
    res.status(status);
    res.render('error',{
        message: message,
        error: status,
        gif404: 'http://giphy.com/gifs/snap-PqzwbRucmkB4Q',
        gif500: 'http://giphy.com/gifs/8ICFnA64AIIa4'
    });
}
module.exports = router;
