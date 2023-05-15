const router = require("express").Router();
const { BlogPost } = require("../model");

router.get("/", async (req, res) => {
  try {
    const BlogData = await BlogPost.findAll({});

    const blog = BlogPost.map(blog => blog.get({ plain: true }));

    res.render("homepage", {
      blog,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const BlogData = await BlogPost.findByPk(req.params.id);
      const blog = BlogData.get({ plain: true });
      res.render("blogs", { blog, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
