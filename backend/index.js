const express = require("express");
const mysql = require("mysql2");
const connect = require("./conexao.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Uma simples api rodando ");
  res.end();
});
app.get(
  "/dados",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery("select * from dados", res);
  }
);
//método POST para inserção de dados

//uso do body para envio de informação

app.post(
  "/dados",

  (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;
    // res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery(
      "insert into dados (email, senha) values('" +
        email +
        "', '" +
        senha +
        "')",
      res
    );
  }
);

app.post("/dados/login", async (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  if (!email || !senha) {
    //TODO: mudar mensagem de erro quando campo vier vazio
    return res.status(403).send("Email is empty!");
  }

  return connect.execSQLQuery(
    `SELECT * FROM dados WHERE email = '${email}' AND senha = '${senha}'`,
    res
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server aberto na porta ${PORT}`));
