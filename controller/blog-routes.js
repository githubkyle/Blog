const router = require("express").Router();
const { BlogPost } = require("../model/BlogPost");

//CRUD ROUTES

router.post("/blogger", async (req, res) => {
  try {
    const blogPost = BlogPost.createNew({
      attributes: ["title", "text"]
    });
    res.render("blogger", { blogPost, loggedIn: req.session.loggedIn });
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
    res.render("blogger", { upBlog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/dummyAPIindex", (req, res) => {
  res.status(200).json({ message: "Dummy route worked" });
});
router.delete("/blogger/:id", async (req, res) => {
  try {
    await BlogPost.findOneAndDelete({ _id: req.params.id });
    res.render("blogger");
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
  await res.render("blogger");
});

router.get("/blogger/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const BlogData = await BlogPost.findByPk(req);
      const blog = BlogData.get({ plain: true });
      res.render("blogger", { blog, loggedIn: req.session.loggedIn });
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
    res.render("blogger", { blogPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
