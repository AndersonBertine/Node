const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Bem vindos ao meu app.")
}) // Rota para o caminho do index no node

app.get("/sobre", function(req, res){
    res.send("Pagina Sobre Mim.")
}) // Rota para o /sobre da pagina

app.get("/blog", function(req, res){
    res.send("Pagina Blog.")
}) // Rota para o /blog da pagina

app.get('/ola/:nome/:cargo', function(req, res){
    res.send('<h1>Ola '+req.params.nome+'</h1>'+'<h2>Seu cargo e: '+req.params.cargo+'</h2>')
}) // Rota para pegar o nome pelo paramentro (GET) localhost:8081/ola/Nome Escolhido

app.listen(8081, function(){
    console.log("Server ON!")
}) // Abre o servidor com express localhost:8081

