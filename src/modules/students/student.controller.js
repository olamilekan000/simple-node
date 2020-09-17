const student = require(".");
const adaptRequest = require("../../common/adapt-request");

const studentControllers = {
  addNewStudent: (req, res) => {
    const httpRequest = adaptRequest(req);

    student
      .addStudentRequestHandler(httpRequest)
      .then(({ headers, statusCode, data }) => {
        res.set(headers).status(statusCode).send(data);
      })
      .catch((e) =>
        res
          .status(500)
          .json({
            error: "Internal server error",
          })
          .end()
      );
  },
  getAllStudents: (_, res) => {
    student
      .getAllStudentsRequestHandler()
      .then(({ headers, statusCode, data }) => {
        res.set(headers).status(statusCode).send(data);
      })
      .catch((e) =>
        res
          .status(500)
          .json({
            error: "Internal server error",
          })
          .end()
      );
  },
};

module.exports = studentControllers;
