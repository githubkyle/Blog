const router = require("express").Router();

// const apiRoutes = require("./controller/api");
const blogRoutes = require("./blog-routes.js");

router.use("/", blogRoutes);
// router.use("/api", apiRoutes);

module.exports = router;
