var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var service = require('./service')

///
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET todo listing. */
router.get('/getTodos/:userId', async function(req, res, next) {
    var userID = req.params.userId;
    console.log("USer :",userID);
    service.getTodoForUSer(userID, function(dataObj) {
        res.json({ data  : dataObj})
    });
});

/* add todo listing. */
router.post('/add', async function(req, res, next) {
    var data = service.addTodo(req.body, function(dataObj){
      res.json({ data  : dataObj})
    });
});

/* delete todo listing. */
router.delete('/delete', function(req, res, next) {
    console.log(req.query)
    service.deleteTodo(req.query, function(dataObj){
        res.json({ data  : dataObj})
    });
});

/* delete todo listing. */
router.put('/edit', function(req, res, next) {
    service.updateTodo(req.body, function(dataObj){
        res.json({ data  : dataObj})
    });
});

module.exports = router;