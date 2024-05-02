const { DataTypes } = require("sequelize");
const db =  require("./dbConfig"); 

const User = db.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    fullname: {
      type: DataTypes.STRING,
    }
 });
 db.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = User;