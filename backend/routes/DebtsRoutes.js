const router = require('express').Router();
const DebtsController = require('../controllers/DebtsController');
const verifyToken = require('../helpers/verify-token');

// rota de puxar todos as dividas cadastradas pelos usuarios
router.get('/', DebtsController.getAll)

// rota para criar novos registros de dividas
router.post('/create', DebtsController.create)

module.exports = router