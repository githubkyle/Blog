const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

BlogPost.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = BlogPost;
