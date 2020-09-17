const studentServices = require("./student.services");
const studentModel = require("../../models/student");
const studentRequestHandlers = require("./student-request-handler");

const studentDbInteractor = studentServices({ database: studentModel });
const student = new studentRequestHandlers({
  dbInteractor: studentDbInteractor,
});

module.exports = student;
