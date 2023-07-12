const router = require("express").Router();
const blogRoutes = require("./blog-routes.js");
const userRoutes = require("./api/user-routes");

router.use("/", blogRoutes);
router.use("/api", userRoutes);

// Define other routes for CRUD operations, such as creating, updating, and deleting blog posts

module.exports = router;
