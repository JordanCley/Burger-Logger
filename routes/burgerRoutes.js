const Burger = require("../models/burger.js");
const router = require("express").Router();

router.get("/burgers", function(req, res){
    Burger.findAll().then(result => {
        res.render("index.hbs", {burgers: result});
    })
});

router.post("/burgers/new", function(req, res){
    const burger = req.body;
    console.log(burger);
    Burger.create({
        burger_name: burger.name
    }).then(function(results){
        res.end();
    })
    // res.redirect("back");
    
});

router.put("/burgers/:id", function(req, res){
  Burger.update({
    devoured: 1,
  }, {
      where: {
          id: req.params.id,
  }
  }).then(function(results){
    res.end();
  });

});
 

module.exports = router;