const router = require('express').Router()
const DebtsController = require('../controllers/DebtsController')

router.get('/', DebtsController.getAll)


module.exports = router