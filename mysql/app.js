const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){ // Funcao de callback de algum evento Then - Então
    console.log('Conectado com sucesso.')
}).catch(function(erro){ // Se nao conectar ele pega o erro
    console.log('Falha ao se conectar: '+erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* 
 Criando as tabelas

 Postagem.sync({force: true})
 Usuario.sync({force: true})
*/

/*
Inserção de valores no postagem
Postagem.create({
    titulo: 'Novo virus',
    conteudo: 'Corona virus encontrando na china.'
})

Usuario.create({
    nome: 'Guilherme',
    sobrenome: 'Fontes',
    idade: 20,
    email: 'guilhermefamorim2020@gmail.com'
})
*/



