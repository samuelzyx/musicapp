'use strict';

var bcrypt = require('bcrypt-nodejs');

var User = require('../models/user');

function register(req, res) {
    var user = new User();
    // params http request
    var params = req.body;

    //setear parametros a propiedades del schema
    user.name = params.name;
    user.lastname = params.lastname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = null;

    if (!params.password) {
        return res.status(200).send({message: 'Introduce la contraseña'});
    }

    //Encriptar contraseña
    bcrypt.hash(params.password, null, null, function (err, hash) {
        if (err) {
            return res.status(500).send({message: 'Error al encriptar contraseña'});
        }

        user.password = hash;

        if (user.name == null ||
            user.lastname == null ||
            user.email == null) {
            return res.status(404).send({message: 'Rellena los campos'});
        }
        //guardar el usuario
        user.save((err, userStored) => {
            if (err) {
                return res.status(500).send({message: 'Error al guardar el usuario'});
            }

            if (!userStored) {
                return res.status(404).send({message: 'No se ha guardado el usuario'});
            }

            res.status(200).send({user: userStored});
        });
    });
}

module.exports = {
    register
};