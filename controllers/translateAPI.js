//var express = require('express');
var BeGlobal = require('node-beglobal');

//Iniltialize the BeGlobal API

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'sF3%2FtRzwuFzV%2BvIH23O9dA%3D%3D'
});

// beglobal.languages.all(
// 	function(err, results) {
// 		if(err) {
// 			return console.log('error :', err);
// 		}

// 		console.log(results);
// 	}
// );
var translateAPI = {
	formSubmit: function(req, res){
		console.log(req.body);
	}



};


// beglobal.translations.translate(
//   {text: 'hello', from: 'eng', to: 'fra'},
//   function(err, results) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log(results);
//   }
// );

module.exports = translateAPI;