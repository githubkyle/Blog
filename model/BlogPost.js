const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

BlogPost.init({
  id: {
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = BlogPost;
