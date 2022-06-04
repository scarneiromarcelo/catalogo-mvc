
const express = require("express");
const path = require("path"); //Importando lib path do express
// const req = require("express/lib/request");



const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //Referenciando a pasta que irá guardar os arquivos

app.get("/",  (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
    res.render("index");
  });
  
  app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
  );