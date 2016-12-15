var express = require('express');
var router = express.Router();
var userQuery = require('../db/usersqueries')

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


function resError(res, status, message) {
    res.status(status);
    res.json({
        message
    });
}
module.exports = router;
