//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'

const page = require('page')

var main = document.getElementById('main-container')//nos traemos el section del index.pug

page('/', function (ctx, next) {
	main.innerHTML =  'Home'
})

//Debemos crear la ruta en el server.js
page('/signup', function (ctx, next) {
	main.innerHTML =  'Signup'
})

page.start()