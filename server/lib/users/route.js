const controller = require("./controller");
const router = require("express").Router();
const { check } = require("express-validator");

router.post(
  "/api/users",
  [
    check("firstName", "The first name must not be empty")
      .exists()
      .isLength({ max: 50 }),
    check("surname", "The surname must not be empty")
      .exists()
      .isLength({ max: 50 }),
    check("email", "The email is invalid")
      .exists()
      .isEmail()
      .normalizeEmail()
      .isLength({ max: 255 }),
    check("telephoneNumber", "The telephone number must not be empty")
      .exists()
      .isLength({ max: 15 }),
    check("gender", "The gender provided must not be empty")
      .exists()
      .isLength({ max: 20 }),
    check("dateOfBirth", "The date of birth must not be empty")
      .exists()
      .isLength({ max: 10 }),
    check("comments", "The comment must not be at least 5 characters long")
      .exists()
      .isLength({ min: 5, max: 50 })
  ],
  controller.createUser
);
router.get("/api/users", controller.fetchAllUsers);

module.exports = router;
