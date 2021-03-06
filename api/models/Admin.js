/**
* Admin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	types: {
		password: function(password) {
          return password === this.passwordConfirmation;
        }
	},

  attributes: {

  	name:{
  		type: "string",
  		required: true
  	},

  	password:{
  		type: "string",
  		required: true,
  		password: true
  	},

  	rePassword:{
  		type: "string",
  		required: true
  	}

  }
};

