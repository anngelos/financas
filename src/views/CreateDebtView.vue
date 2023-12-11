<template>
  <div class="debts-container">
    <div class="flex">
      <div class="m-auto w-auto">
        <div>
          <div
            class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium text-white bg-[#527853] rounded-md">
            <span class="pl-2 mx-1">Preencha os campos abaixo para criar sua dívida</span>
          </div>
          <div class="mt-5 bg-white rounded-lg shadow">
            <div class="flex">
              <div class="flex-1 py-2 pl-5 overflow-hidden">
              </div>
            </div>
            <div class="px-5 pb-5">
              <div class="flex">
                <div class="flex-grow pr-2">
                  <select id="monthRef" name="monthRef" v-model="monthRef"
                    class="text-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                    <option value="">Mês de Referência</option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                  </select>
                </div>
                <div class="flex-grow">
                  <select id="yearRef" name="yearRef" v-model="yearRef"
                    class="text-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                    <option value="">Ano de Referência</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>
              </div>
              <input placeholder="Salário (apenas números)" type="number" id="salary" name="salary" v-model="salary"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
            </div>
            <div class="flex">
              <div class="flex-1 py-5 pl-5 overflow-hidden">
                <h1 class="inline text-2xl font-semibold leading-none">
                  Insira as suas contas do mês
                </h1>
              </div>
              <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div class="px-5 pb-5">
              <div v-for="(debtArr, index) in debtsArr" :key="index" class="flex items-center">
                <h1 class="font-bold pl-2 pr-2">#{{ index + 1 }}</h1>
                <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="Nome da Conta" type="text" name="billName" id="billName" v-model="debtArr.billName"
                    class="text-black placeholder-black w-full px-4 py-2.5 mt-2 text-base ease-in-out rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                </div>
                <div class="flex-grow">
                  <input placeholder="Valor da Conta" type="text" name="billValue" id="billValue"
                    v-model="debtArr.billValue"
                    class="text-black placeholder-black w-full px-4 py-2.5 mt-2 text-base ease-in-out rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                </div>
                <button class="ml-3 hover:text-red-500" @click="deleteBill(index)">
                  remover
                </button>
              </div>
              <button @click="addInput()"
                class="text-white mt-5 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base ease-in-out rounded-lg bg-[#527853] focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">+</button>
            </div>
            <hr class="mt-4" />
            <div class="flex flex-row-reverse p-3">
              <div class="flex-initial pl-3 mt-8">
                <button type="button" @click="createDebt()"
                  class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white bg-[#527853] rounded-md active:scale-95 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                      opacity=".3"></path>
                    <path
                      d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z">
                    </path>
                  </svg>
                  <span class="pl-2 mx-1">Criar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex"

export default {
  name: "CreateDebtView",
  data() {
    return {
      monthRef: '',
      yearRef: '',
      salary: '',
      debtsArr: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    addInput() {
      this.debtsArr.push({});
    },
    deleteBill(index) {
      this.debtsArr.splice(index, 1)
    },
    async createDebt() {
      const newDebt = {
        monthRef: this.monthRef,
        yearRef: this.yearRef,
        salary: this.salary,
        debtsArr: this.debtsArr,
        user: {
          id: this.user.id,
          name: this.user.name,
          nickname: this.user.nickname,
          image: this.user.image,
        }
      }

      const token = localStorage.getItem('jwt')

      try {
        let response = await axios.post('http://localhost:5000/debts/create', newDebt,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

        if (token) {
          this.$swal.fire({
            icon: "success",
            title: "Sucesso",
            text: 'Divida criada.',
            confirmButtonText: "Certo",
          });

          this.monthRef = ''
          this.yearRef = ''
          this.salary = ''
          this.debtsArr = {}

          return 'success';
        }
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          confirmButtonText: "Certo",
        });
      }
    }
  }
}
</script>

<style>
.debts-container {
  margin-top: 20px;
}

body {
  background-color: #ccc;
}
</style>
