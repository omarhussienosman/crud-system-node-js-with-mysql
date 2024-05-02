const express = require("express");
const app = express();
const parser = require("body-parser");
const db = require("./dbConfig");
const controller = require("./userController");


app.use(parser.json());

db.sync();

app.post("/users/new",(req,res)=>{
    controller.createUser(req,res)
});

app.get("/users",(req,res)=>{
    controller.allUsers(res)
});

app.put("/users/update/:id",(req,res)=>{
    controller.updateUser(req,res)
});

app.delete("/users/delete/:id",(req,res)=>{
    controller.deleteUser(req,res)
});


app.listen(8000,()=>[
    console.log("ruuuuuuuuuuuuuuunnnnnnnnn")
]);

