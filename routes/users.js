var express = require('express');
var router = express.Router();
var userQuery = require('../db/usersqueries')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if(!isNaN(req.params.id)){
    userQuery.getUser(req.params.id).then(user => {
    if (user){
     res.json(user);
  } else {
    resError(404, 'That bitch does not exist')
  }})
  } else { resError(500, 'Quit Being Tricky')
    error

}
});


 function resError(status, message){
   res.status(status);
   res.json({message});
 }
module.exports = router;
