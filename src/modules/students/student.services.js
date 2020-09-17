const uuid = require("uuid").v4;

const studentServices = ({ database }) => {
  const addStudent = async (user) => {
    const newUser = new database({ _id: `user-${uuid()}`, ...user });
    const savedUser = newUser.save();
    return savedUser;
  };

  const findStudentByEmail = async (email) => {
    const student = await database.findOne({ email });
    return student;
  };

  const getAllUsers = async () => {
    const students = await database.find({});
    return students;
  };

  return Object.freeze({
    addStudent,
    findStudentByEmail,
    getAllUsers,
  });
};

module.exports = studentServices;
