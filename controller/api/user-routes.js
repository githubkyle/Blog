const router = require("express").Router();
const { User } = require("../../model");

router.post("/", async (req, res) => {
  try {
    const NewUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(NewUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const Logging = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!Logging) {
      res
        .status(400)
        .json({ message: "Wrong email or password. Please try again!" });
      return;
    }

    const validPassword = await Logging.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Wrong email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
