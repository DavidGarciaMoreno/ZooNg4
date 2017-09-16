'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// modelos
var Animal = require('../models/animal');

// acciones
function pruebas(req, res) {
	res.status(200).send({
		message: 'Probando el controlador de animales y la accion pruebas',
		user: req.user
	});
}

module.exports = {
	pruebas
};