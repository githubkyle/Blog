const sequelize = require("./config/connection");
const BlogPost = require("./model/BlogPost");
const User = require("./model/User");

const BlogPostData = [
  { title: "First test", text: "More text than in the title" },
  { title: "Second test title", text: "again more text than in the title" }
];

const UserData = [
  { username: "New User1", email: "trythis@gmail.com", pass: "testing" }
];

async function seed() {
  try {
    await sequelize.sync();

    await BlogPost.bulkCreate(BlogPostData);

    await User.bulkCreate(UserData);

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

seed();

module.exports = (BlogPostData, UserData);
