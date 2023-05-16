const { Model, DataTypes } = require("sequelize");

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
