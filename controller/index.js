const router = require("express").Router();

// // const apiRoutes = require("./controller/api");
const blogRoutes = require("./blog-routes.js");

router.use("/", blogRoutes);
// // router.use("/api", apiRoutes);

// module.exports = router;

// const { BlogPost } = require("../model/BlogPost");

// router.get("/", async (req, res) => {
//   try {
//     // Retrieve blog posts from the database
//     const blogPosts = await BlogPost.findAll({
//       attributes: ["title", "text"],
//       include: [
//         {
//           model: User,
//           attributes: ["email"]
//         }
//       ]
//     });

//     // Render the blog posts view and pass the data
//     res.render("blogs", { blogPosts, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Define other routes for CRUD operations, such as creating, updating, and deleting blog posts

module.exports = router;
