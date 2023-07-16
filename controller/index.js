const router = require("express").Router();
const apiRoutes = require("./api");
const renderRoutes = require("./renderRoutes");
router.use("/", renderRoutes);
router.use("/api", apiRoutes);

// Define other routes for CRUD operations, such as creating, updating, and deleting blog posts

module.exports = router;
