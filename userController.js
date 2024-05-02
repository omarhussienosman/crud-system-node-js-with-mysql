const { where } = require("sequelize");
const db = require("./dbConfig");
const userModel = require("./userModel");

function createUser(req, res) {
    if (!req.body.username || !req.body.password || !req.body.fullname || !req.body.email) {
        return res.status(400).send({ "message": "some filed are missing" });
    }
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullname: req.body.fullname
    }
    userModel.create(user).then(data => {
        res.status(201).send({ "message": "user created succsesfully", "data": data });
    }
    ).catch(error => {
        res.status(500).send(error);
    });
}

function allUsers(res) {
    userModel.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send(error);
    });
}

function updateUser(req,res) {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullname: req.body.fullname
    };
    userModel.update(user, { where: { id: req.params.id } }).then(data => {
        res.status(200).send({ "message": "user updated succesfully", "data": data });
    }).catch(error => {
        res.status(500).send(error);
    });
}

function deleteUser(req, res) {
    userModel.destroy({where:{id:req.params.id}}).then(data=>{
        res.status(200).send({ "message": "user deleted succesfully"});
    }).catch(error => {
        res.status(500).send(error);
    });
}

module.exports = {
    createUser,
    allUsers,
    updateUser,
    deleteUser
}