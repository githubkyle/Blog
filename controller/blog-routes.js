const router = require("express").Router();
const { BlogPost } = require("../models");

// This route is already coded down below last
// router.get("/", async (req, res) => {
//   try {
//     BlogPost.findAll({
//       attributes: ["title", "text"],
//       include: [
//         {
//           model: User,
//           attributes: ["email"]
//         }
//       ]
//     });
//     res.render("blogs");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//CRUD ROUTES

router.post("/blogger", async (req, res) => {
  try {
    const blogPost = BlogPost.createNew({
      attributes: ["title", "text"]
    });
    res.render("blogs", { blogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/blogger/:id", async (req, res) => {
  try {
    const upBlog = BlogPost.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { title: req.body.title, text: req.body.text } },
      { new: true }
    );
    res.render("blogs", { upBlog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/blogger/:id", async (req, res) => {
  try {
    await BlogPost.findOneAndDelete({ _id: req.params.id });
    res.render("blogs");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login", { layout: "index" });
});
router.get("/CRUD", async (req, res) => {
  res.render("CRUD", { layout: "index" });
});

router.get("/blogger", async (req, res) => {
  await res.render("blogs");
});

router.get("/blogpost/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const BlogData = await BlogPost.findByPk(req);
      const blog = BlogData.get({ plain: true });
      res.render("blogs", { blog, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get("/", async (req, res) => {
  try {
    // Retrieve blog posts from the database
    const blogPosts = await BlogPost.findAll({
      attributes: ["title", "text"],
      include: [
        {
          model: User,
          attributes: ["email"]
        }
      ]
    });

    // Render the blog posts view and pass the data
    res.render("blogs", { blogPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
