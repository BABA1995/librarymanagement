const express = require('express');
const router = express.Router();
const schema = require('./schemas/user-schema')

router.get('/retrive', function(req, res){
    // res.send({type:'GET'});
   
});
router.post('/add', function(req, res){
   schema.create(req.body).then(function(sch) {
       res.send(sch);
   }).catch(err)

});
module.exports = router;