const mongoose = require('../db/conn')
const { Schema } = mongoose

const Debts = mongoose.model(
  'Debts',
  new Schema({
    monthRef: {
      type: String,
      required: true,
    },
    yearRef: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    debtsArr: {
      type: Array,
      required: true,
    },
    debtsBillSum: {
      type: Number,
    },
    user: Object,
  },
  {timestamps: true}),
)

module.exports = Debts