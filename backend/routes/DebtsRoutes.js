const router = require("express").Router();
const DebtsController = require("../controllers/DebtsController");
const verifyToken = require("../helpers/verify-token");

// rota de puxar todos as dividas cadastradas por todos os usuarios
router.get("/", DebtsController.getAll);

// rota para criar novos registros de dividas
router.post("/create", DebtsController.create);

// rota pra mostrar todas as dividas registradas pelo usuario q está logado no momento
router.get("/mydebts", verifyToken, DebtsController.getAllUserDebts);

module.exports = router;
