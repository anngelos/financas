<template>
  <div v-if="!debts.length" class="error-message">
    <p>Oops... Você não tem nenhuma dívida cadastrada!!</p>
  </div>
  <div class="debts-container-list">
    <div v-for="(debt, i) in debts" :key="i" class="card m-4 bg-[#B6C4B6]">
      <p class="card-title">{{ debt.monthRef.toUpperCase() }} / {{ debt.yearRef }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>DESPESA</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody v-for="(debtArr, x) in debt.debtsArr" :key="x">
          <tr>
            <td class="">
              {{ debtArr.billName }}
            </td>
            <td class="">
              {{ formatMoney(debtArr.billValue) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mt-4">
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-black">Total de Despesa</dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-black">{{ formatMoney(debt.debtsBillSum) }}</dd>
            </dl>
          </div>
        </div>
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-black">Salário</dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-black">{{ formatMoney(debt.salary) }}</dd>
            </dl>
          </div>
        </div>
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-black">Valor Restante</dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-black">{{ formatMoney(debt.remainingValue) }}</dd>
            </dl>
          </div>
        </div>
      </div>
      <button class="delete-debt-btn" @click="deleteMyDebt(debt._id)">remover</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex";

export default {
  name: 'DebtsListView',
  data() {
    return {
      meunome: 'Angelo',
    }
  },
  computed: {
    ...mapState(['user', 'debts']),
  },
  methods: {
    formatMoney(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },
    deleteMyDebt(id) {
      const token = localStorage.getItem('jwt');

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      axios.delete(`http://localhost:5000/debts/${id}`, config)
        .then(response => {
          window.location.reload();
        })
        .catch(error => {
          console.error('Erro ao excluir a dívida: ', error);
        });
    },
    async getMyDebts() {
      const url = "http://localhost:5000/debts/mydebts";
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(url, config);
        this.$store.commit('setDebts', response.data.debts);
      } catch (error) {
        console.log("Desculpe, mas houve um erro ao obter as dívidas...");
      }
    },
  },
  created() {
    this.getMyDebts()
  }
}
</script>

<style>
.error-message {
  margin-top: 20px;
  font-weight: bold;
}

.debts-container-list {
  margin-top: 30px;
}

.card {
  border: 5px solid #527853;
  padding: 22px;
  border-radius: 15px;
}

.card-title {
  font-weight: bold;
  font-size: 30px;
}

.table {
  border-collapse: separate;
  border-spacing: 5px;
  border: 1px solid black;
  text-align: center;
}

th {
  background-color: black;
  color: white;
  padding: 0px 30px;
}

.delete-debt-btn {
  color: red;
}

.delete-debt-btn:hover {
  transform: scale(1.2);
}
</style>