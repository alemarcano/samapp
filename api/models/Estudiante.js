/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'samappMySql',
  
	tableName: 'estudiante',

  attributes: {

/*	  id: {
  		type: 'integer',
  		primaryKey: true,
  		unique: true,
  		autoIncrement: true,
  		columnName: id
  	},
*/
  	carnet: {
  		type: 'integer',
  		require: true,
  		columnName: 'Carnet'
  	},

  	cedula: {
  		type: 'integer',
  		require: true,
  		columnName: 'Cedula'
  	},

  	primerNombre: {
  		type: 'string',
  		size: 20,
  		required: true,
  		columnName: 'PrimerNombre' 
  	},

  	segundoNombre: {
  		type: 'string',
  		size: 20,
  		columnName: 'SegundoNombre' 
  	},

  	primerApellido: {
  		type: 'string',
  		size: 20,
  		required: true,
  		columnName: 'PrimerApellido' 
  	},

  	segundoApellido: {
  		type: 'string',
  		size: 20,
  		required: true,
  		columnName: 'SegundoApellido' 
  	},

  	nroCasa: {
  		type: 'integer',
  		require: true,
  		size: 11,
  		columnName: 'NroCasa'
  	},

  	urbanizacion: {
  		type: 'string',
  		require: true,
  		size: 20,
  		columnName: 'Urbanizacion'
  	},

  	calle: {
  		type: 'string',
  		size: 10,
  		columnName: 'Calle'
  	},

  	municipio: {
  		type: 'string',
  		require: true,
  		size: 10,
  		columnName: 'Municipio'
  	},

    contrasena: {
      type: 'string',
      require: true,
      columnName: 'contrasenaEncriptada'
    },

    email: {
      type: 'string',
      require: true,
      email: true,
      columnName: 'email'
    },

  },
};

