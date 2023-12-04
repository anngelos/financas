const express = require("express");
const cors = require('cors')
const app = express();
const DebtsRoutes = require("./routes/DebtsRoutes");
const UserRoutes = require('./routes/UserRoutes')

app.use(express.json());

app.use(cors({ credentials: true, origin: 'http://localhost:8080' }))

app.use(express.static("public"));

app.use('/users', UserRoutes)
app.use("/debts", DebtsRoutes);

app.listen(5000, () => {
  console.log('Server iniciado...')
})