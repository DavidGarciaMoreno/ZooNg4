'use strict';

// modulos
var bcrypt = require('bcrypt-nodejs');

// modelos
var User = require('../models/user');

// acciones
function pruebas(req, res) {
	res.status(200).send({
		message: 'Probando el controlador de usuarios y la accion pruebas'
	});
}

function saveUser(req, res) {
	var user = new User();

	// recoger parametros de la peticion
	var params = req.body;
	console.log(params);

	if(params.password && params.name && params.surname && params.email) {
		// asignar valores al usuario
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;
		user.role = 'ROLE_USER';
		user.image = null;

		User.findOne({ email: user.email.toLowerCase() }, (err, issetuser) =>{
			if(err) {
				res.status(500).send({ message: 'Error al comprobar el usuario' });				
			} else {
				if(!issetuser) {
					bcrypt.hash(params.password, null, null, function(err, hash) {
						user.password = hash;
						// guardar user en bd
						user.save((err, userStored) => { 
							if(err) {
								res.status(500).send({ message: 'Error al guardar el usuario' });
							} else {
								if(!userStored) {
									res.status(404).send({ message: 'No se ha registrado el usuario' });
								} else {
									res.status(200).send({ user: userStored });
								}
							}
						});
					});						
				} else {
					res.status(200).send({
						message: 'El usuario no puede registrarse'
					});
				}
			}
		});
	} else {
		res.status(200).send({
			message: 'Introduce los datos correctamente para poder registrar el usuario'
		});
	}
}

function login(req, res) {
	var params = req.body;
	var email = params.email;
	var password = params.password;

	User.findOne({ email: email.toLowerCase() }, (err, user) => {
		if(err) {
			res.status(500).send({ message: 'Error al comprobar el usuario' });				
		} else {
			if(user) {
				bcrypt.compare(password, user.password, (err, check) => {
					if(check) {
						res.status(200).send({ user });		
					} else {
						res.status(404).send({
							message: 'La contraseña no es válida'
						});
					}
				});
			} else {
				res.status(404).send({
					message: 'El usuario no ha podido hacer login'
				});
			}
		}
	});
}

module.exports = {
	// exportamos los metodos
	pruebas,
	saveUser,
	login
};