const makeHttpSuccess = require("../../common/http-response-handler");
const makeHttpError = require("../../common/http-error-handler");

class studentRequestHandlers {
  constructor({ dbInteractor }) {
    this.dbInteractor = dbInteractor;
  }

  async addStudentRequestHandler(httpRequest) {
    const { body } = httpRequest;
    const student = await this.dbInteractor.findStudentByEmail(body.email);

    if (student) {
      return makeHttpError({
        statusCode: 409,
        errorMessage: "A user with this email already exist",
      });
    }

    const response = await this.dbInteractor.addStudent(body);

    return makeHttpSuccess({
      statusCode: 200,
      successMessage: "ok",
      successData: response,
    });
  }

  async getAllStudentsRequestHandler() {
    const response = await this.dbInteractor.getAllUsers();

    return makeHttpSuccess({
      statusCode: 200,
      successMessage: "ok",
      successData: response,
    });
  }
}

module.exports = studentRequestHandlers;
