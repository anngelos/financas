const Debts = require('../models/Debts');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');

module.exports = class DebtsController {
  
  // puxar as dividas cadastradas pelos usuarios
  static async getAll(req, res) {
    const debts = await Debts.find();

    res.status(200).json({
      pets: debts,
    })
  }

  static async create(req, res) {
    const { monthRef, yearRef, salary, debtsArr } = req.body;

    if (!monthRef) {
      res.status(422).json({ message: 'O mês de referência é obrigatório.'})
      return
    }

    if (!yearRef) {
      res.status(422).json({ message: 'O ano de referência é obrigatório.'})
      return
    }

    if (!salary) {
      res.status(422).json({ message: 'O salário é obrigatório.'})
      return
    }

    if (!debtsArr) {
      res.status(422).json({ message: 'Deve constar dívidas para salvar no sistema.'})
      return
    }

    const token = getToken(req)
    const user = await getUserByToken(token, res)

    let sumValue = 0;

    debtsArr.forEach((item => {
      sumValue += item.billValue;
    }));

    const debt = new Debts({
      monthRef,
      yearRef,
      salary,
      debtsArr,
      debtsBillSum: sumValue,
      user: {
        _id: user._id,
        name: user.name,
        nickname: user.nickname,
        image: user.image,
      }
    })

    try {
      const newDebt = await debt.save();
      res.status(201).json({ message: "Dívida cadastrada com sucesso.", newDebt })
    } catch(err) {
      res.status(500).json({ message: err })
    }
  }

  // puxar as dividas que o usuario logado criou
  static async getAllUserDebts(req, res) {
    const token = getToken(req)
    const user = await getUserByToken(token, res)

    const debts = await Debts.find({ 'user._id': user._id }).sort('-createdAt');

    res.status(200).json({
      debts,
    })
  }
  
}