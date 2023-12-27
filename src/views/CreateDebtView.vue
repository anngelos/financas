<template>
  <div class="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative bg-white md:mx-0 shadow rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center justify-center">
            <div class="block font-semibold text-xl">
              <h2 class="leading-relaxed">Criar Dívida</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">Após criar sua dívida ela será automaticamente
                adicionada ao seu Dashboard.</p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">









            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">



              <div class="flex items-center justify-around space-x-4">
                <div class="flex flex-col w-full">
                  <!-- <label class="leading-loose">Start</label> -->
                  <div class="relative focus-within:text-black text-black">
                    <select v-model="monthRef"
                      class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
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
                    <div class="absolute left-3 top-2">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col w-full">
                  <!-- <label class="leading-loose">End</label> -->
                  <div class="relative focus-within:text-black text-black">
                    <select type="text" v-model="yearRef"
                      class="pr-4 pl-10 py-2 border focus:ring-black focus:border-black w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-black">
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
                    <div class="absolute left-3 top-2">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose text-black">Insira o valor total dos seus ganhos do mês</label>
                <input
                  v-model="salary"
                  type="number"
                  class="px-4 py-2 border focus:ring-black focus:border-black w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-black"
                  placeholder="Ganhos do mês (apenas número)">
              </div>
              
              <div class="flex flex-col">
                <label class="leading-loose text-black">Insira as suas contas do mês</label>
                
                <div v-for="(debtArr, index) in debtsArr" :key="index" class="flex items-center justify-around space-x-4 mb-3">
                  <span>#{{ index+1 }}</span>
                  <input
                    v-model="debtArr.billName"
                    type="text"
                    class="px-4 py-2 border focus:ring-black focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-black"
                    placeholder="Nome da Conta"
                  >
                  
                  <input
                    v-model="debtArr.billValue"
                    type="number"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-black"
                    placeholder="Valor da Conta"
                  >
                  
                    <button class="hover:text-red-500" @click="deleteBill(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                  </button>
                </div>
                <button @click="addInput()" class="bg-indigo-600 flex justify-center items-center w-full text-white px-1 py-1 rounded-md focus:outline-none">
                +
              </button>
              </div>

            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button @click="createDebt()" class="bg-indigo-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                Criar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





<!--
           
            <div class="px-5 pb-5">
              <div v-for="(debtArr, index) in debtsArr" :key="index" class="flex items-center">
                <h1 class="font-bold pl-2 pr-2">#{{ index + 1 }}</h1>
                <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="Nome da Conta" type="text" name="billName" id="billName" v-model="debtArr.billName"
                    class="text-black placeholder-black w-full px-4 py-2.5 mt-2 text-base ease-in-out rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                </div>
                <div class="flex-grow">
                  <input placeholder="Valor da Conta" type="number" name="billValue" id="billValue"
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
  </div> -->
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
      debtsArr: [],
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
          this.debtsArr = []

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
