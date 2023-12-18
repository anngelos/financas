const Debts = require('../models/Debts');

async function createDebt(monthRef, yearRef, salary, debtsArr, user) {
  let sumValue = 0;

  debtsArr.forEach((item => {
    sumValue += item.billValue;
  }));

  let remainingValue = salary - sumValue;

  const debt = new Debts({
    monthRef,
    yearRef,
    salary,
    debtsArr,
    debtsBillSum: sumValue,
    remainingValue: remainingValue,
    user: {
      _id: user._id,
      name: user.name,
      nickname: user.nickname,
      image: user.image,
    }
  });

  try {
    const newDebt = await debt.save();
    return newDebt;
  } catch(error) {
    console.log("Oops, houve um erro: ", error);
  }
}

async function getUserDebts(user) {
  try {
    const debts = await Debts.find({ "user._id": user._id }).sort("-createdAt");
    return debts;
  } catch (error) {
    console.log("Oops, houve um erro: ", error);
  }
}

module.exports = { createDebt, getUserDebts };