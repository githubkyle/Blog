const router = require("express").Router();
const { User } = require("../../model/User");

// router.post("/signup", async (req, res) => {
//   try {
//     const newB = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error creating user" });
//   }
// });

// router.get("/dummyAPIindex", (req, res) => {
//   res.status(200).json({ message: "Dummy route worked" });
// });

// const validPassword = User.checkPassword(req.body.password);

// router.post("/login", async (req, res) => {
//   try {
//     const Logging = await User.findOne({
//       where: {
//         email: req.body.email
//       }
//     });

//     if (!Logging) {
//       res
//         .status(400)
//         .json({ message: "Wrong email or password. Please try again!" });
//       return;
//     }

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Wrong email or password. Please try again!" });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res
//         .status(200)
//         .json({ user: dbUserData, message: "You are now logged in" });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;

router.post("/signup", async (req, res) => {
  try {
    console.log("Route Hit");

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    console.log(newUser);
    // req.session.save(() => {
    //   req.session.userId = newUser.id;
    //   req.session.username = newUser.username;
    //   req.session.loggedIn = true;

    //   res.json(newUser);
    // });
    // console.log(req.session);
    // console.log(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
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
