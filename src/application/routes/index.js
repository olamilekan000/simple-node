const studentRoutes = require("./students");

const apiRouter = (Router) => {
  const router = Router();

  router.use("/students", studentRoutes(Router));
  return router;
};

module.exports = apiRouter;
