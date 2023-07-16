const router = require("express").Router();
const userRoutes = require("./user-routes");
// const blogRoutes = require("./blog-routes");

router.use("/users", userRoutes);

// router.use("/blogger", blogRoutes);

module.exports = router;
