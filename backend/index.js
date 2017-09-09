'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT ||3789; // si hubiera una variable de entorno definida se cargaria la primera parte

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', { useMongoClient: true })
				.then(() => {
					console.log('La conexion a la bd Zoo se ha realizado correctamente ...');

					app.listen(port, () => {
						console.log('El servidor local con Node y Express está corriendo correctamente ...');
					})
				})
				.catch(err => console.log(err));

