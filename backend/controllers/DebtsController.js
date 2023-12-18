const Debts = require("../models/Debts");
const DebtsService = require("../services/DebtsServices");
const ObjectId = require("mongoose").Types.ObjectId;
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");

module.exports = class DebtsController {
  static async create(req, res) {
    const { monthRef, yearRef, salary, debtsArr } = req.body;

    if (!monthRef) {
      res.status(422).json({ message: "O mês de referência é obrigatório." });
      return;
    }

    if (!yearRef) {
      res.status(422).json({ message: "O ano de referência é obrigatório." });
      return;
    }

    if (!salary) {
      res.status(422).json({ message: "O salário é obrigatório." });
      return;
    }

    if (!debtsArr.length) {
      res
        .status(422)
        .json({ message: "Deve constar dívidas para salvar no sistema." });
      return;
    }

    try {
      const token = getToken(req);
      const user = await getUserByToken(token, res);

      const newDebt = await DebtsService.createDebt(monthRef, yearRef, salary, debtsArr, user);
      res.status(201).json({ message: "Dívida cadastrada com sucesso.", newDebt });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async deleteDebt(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido." });
      return;
    }

    const debt = await Debts.findOne({ _id: id });

    if (!debt) {
      res.status(404).json({ message: "Dívida não encontrada." });
      return;
    }

    const token = getToken(req);
    const user = await getUserByToken(token);

    if (debt.user._id.toString() != user._id.toString()) {
      res.status(404).json({ message: "Houve um problema em processar sua solicitação, tente novamente mais tarde!" });
      return;
    }

    await Debts.findByIdAndDelete(id)
    res.status(200).json({ message: "Dívida removida com sucesso!" });
  }

  static async getAllUserDebts(req, res) {
    try {
      const token = getToken(req);
      const user = await getUserByToken(token, res);

      const debts = await DebtsService.getUserDebts(user);
      res.status(200).json({ debts });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
