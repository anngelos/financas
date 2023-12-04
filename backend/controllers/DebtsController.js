const Debts = require('../models/Debts')

module.exports = class DebtsController {
  
  // get all registered debts
  static async getAll(req, res) {
    const debts = await Debts.find();

    res.status(200).json({
      pets: debts,
    })
  }
  
}