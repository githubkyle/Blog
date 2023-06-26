const router = require("express").Router();
// const { BlogPost } = require("/model");

router.get("/", async (req, res) => {
  try {
    BlogPost.findAll({
      attributes: ["title", "text"],
      include: [
        {
          model: User,
          attributes: ["email"]
        }
      ]
    });
    res.render("blogs");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// app.get("/", (req, res) => {
//   res.render("main", { layout: "index" });
// });

router.get("/login", (req, res) => {
  res.render("login", { layout: "index" });
});
router.get("/CRUD", async (req, res) => {
  res.render("CRUD", { layout: "index" });
});

router.get("/blogger", async (req, res) => {
  res.render("blogger", { layout: "index" });
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
