const mongoose = require("mongoose");

const boostrapApplication = (app, PORT) => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Now connected to the database");
    app.listen(PORT, () => console.log(`app now listening on ${PORT}`));
  });
  mongoose.connection.on("error", () => {
    console.log("Couldn't connect to the mongodb server");
  });
};

module.exports = boostrapApplication;
