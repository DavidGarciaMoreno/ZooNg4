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

function saveAnimal(req, res) {
	var animal = new Animal();
	var params = req.body;

	if(params.name) {
		animal.name = params.name;
		animal.description = params.description;
		animal.year = params.year;
		animal.image = null;
		animal.user = req.user.sub;
		animal.save((err, animalStored) => {
			if(err) {
				res.status(500).send({ message: 'Error en el servidor' });
			} else {
				if(!animalStored) {
					res.status(404).send({ animalmessage: 'No se ha guardado el animal' });
				} else {
					res.status(200).send({ animal: animalStored });
				}
			}
		})
	} else {
		res.status(400).send({ message: 'El nombre del animal es obligatorio' });
	}
}

function getAnimals(req, res) {
	Animal.find({}).populate({ path: 'user' }).exec((err, animals) => {
		if(err) {
			res.status(500).send({ message: 'Error en la peticion' });
		} else{
			if(!animals) {
				res.status(404).send({ message: 'No hay animales' });
			} else {
				res.status(200).send({ animals });
			}
		}
	})
}

module.exports = {
	pruebas,
	saveAnimal,
	getAnimals
};