const router = require("express").Router();
const DebtsController = require("../controllers/DebtsController");
const verifyToken = require("../helpers/verify-token");

router.post("/create", DebtsController.create);
router.get("/mydebts", verifyToken, DebtsController.getAllUserDebts);

module.exports = router;
