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
      const BlogData = await BlogPost.findByPk(req);
      const blog = BlogData.get({ plain: true });
      res.render("blogs", { blog, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
