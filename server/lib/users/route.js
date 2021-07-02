const controller = require("./controller");
const router = require("express").Router();

router.post("/api/users", controller.createUser);
router.get("/api/users", controller.fetchAllUsers);

module.exports = router;
