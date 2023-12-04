const mongoose = require('../db/conn')
const { Schema } = mongoose

// AULA 253

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
    author: Object,
  },
  {timestamps: true}),
)

module.exports = Debts