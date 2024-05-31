//console.log("Hola mundo de node JS");
const expres = require("express");
const apiRoute = require("./routes/routes");
const app = expres();
const port = process.env.port ||3000;
app.use (expres.json());
app.use("/whatsapp",apiRoute);

app.listen(port, () => {console.log("El Puerto es: "+ port)} );