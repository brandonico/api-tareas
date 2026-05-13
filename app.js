const express = require("express");
const app = express();

app.use(express.json());

const tareasRoutes = require("./routes/tareas");

app.use("/tareas", tareasRoutes);

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000 \nhttp://localhost:3000/tareas");
});