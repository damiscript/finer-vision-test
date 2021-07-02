const db = require("../../db");

module.exports = {
  createUser: async (req, res) => {
    const {
      firstName,
      surname,
      email,
      telephoneNumber,
      gender,
      dateOfBirth,
      comments
    } = req.body;
    db.query(
      "INSERT INTO users (firstName,surname,email,telephoneNumber,gender,dateOfBirth,comments) VALUES (?,?,?,?,?,?,?)",
      [
        firstName,
        surname,
        email,
        telephoneNumber,
        gender,
        dateOfBirth,
        comments
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.json(500);
        } else {
          res.json(200, result);
        }
      }
    );
  },
  fetchAllUsers: async (req, res) => {
    await db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
        res.json(500);
      } else {
        res.json(200, result);
      }
    });
  }
};
