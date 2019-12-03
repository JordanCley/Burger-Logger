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
    })
    // res.redirect("back");
    res.end();
});

// router.put("/:id", function(req, res){
//     Burger.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
// }).then(result => {
//     if(result){
//         result.update({
//             result.body.devour = 1;
//         });
//     }
// });

module.exports = router;