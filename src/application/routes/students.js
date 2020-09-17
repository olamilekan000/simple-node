const studentControllers = require("../../modules/students/student.controller");

const studentRoutes = (Router) => {
  const router = Router();

  router
    .route("/")
    .post(studentControllers.addNewStudent)
    .get(studentControllers.getAllStudents);

  return router;
};

module.exports = studentRoutes;
