// jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const date = require(__dirname + '/data.js');





const app = express();

app.set("view engine", "ejs");
// Set the views directory
app.set('views', path.join(__dirname, 'views'));



var item = "";
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
//var items =[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));







app.get("/", function (req, res) {
    const day =date.getDay();

    res.render("list", { day: day, items: items });

});

app.post("/", function (req, res) {
    item = req.body.newItem;
    if (req.body.list == "WorkList") {
       
        workItems.push(item);
        console.log("work");
        res.redirect("/work");

    }
    else {

        items.push(item);
        console.log("Not Work");
        res.redirect("/");
    }
});



app.get("/work", function (req, res) {

    res.render("list", { day: "WorkList", items: workItems });

});

app.get("/about", function (req, res) {

    res.render("about");

});




app.listen(process.env.PORT || 3000, function (req, res) {

    console.log("server is running on port 3000");
});