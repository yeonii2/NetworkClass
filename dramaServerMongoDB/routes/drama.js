var express = require('express');
var router = express.Router();

var model = require('../models/dramaDAO');

router.get('/', (req, res) => {
  model.dramaList({callback: function(docs){
    res.render('dramaList', {list: docs});
  }});
});
  
router.post('/', (req, res) => {
    if (req.body.title && req.body.actor) {
      model.insertDrama(req.body);
    }
    res.redirect('/');
});

module.exports=router;