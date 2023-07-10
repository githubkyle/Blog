const router = require("express").Router();

const userRoutes = require("./controller/api/user-routes");
const blogRoutes = require("./blog-routes.js");

router.use("/", blogRoutes);
router.use("/api", userRoutes);

// Define other routes for CRUD operations, such as creating, updating, and deleting blog posts

module.exports = router;
