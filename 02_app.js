const express = require('express');
const app = express();
const fs = require ('fs');
app.use(express.static('public'));

/*------------------------Route formulaire------------------------------*/
app.get('/formulaire', function (req, res) {
 console.log(__dirname);
 res.sendFile( __dirname + "/public/html/" + "01_form.htm" );
})

/*------------------------Route membres------------------------------*/
app.get('/membres', function (req, res) {
 console.log(__dirname);
 fs.readFile (__dirname + '/public/data/membres.txt', 'utf-8', (err, data) => {
 	if (err) throw err;
	res.end(data);
 	obj = JSON.parse ('[' + data + ']');
 })
 
})

/*------------------------Route /------------------------------*/
app.get('/', (req, res) => {
 console.log('accueil')
 res.end('<h1>Accueil</h1>')
})

/*------------------------Route /traiter_get------------------------------*/
app.get('/traiter_get', function (req, res) {
 // Preparer l'output en format JSON

console.log('la route /traiter_get')

// on utilise l'objet req.query pour récupérer les données GET
 let reponse = {
 prenom:req.query.prenom,
 nom:req.query.nom,
 courriel:req.query.courriel,
 telephone:req.query.telephone
 };
console.log(reponse);
 res.end(JSON.stringify(reponse));
})

let server = app.listen(8080, function () {
 let host = server.address().address
 let port = server.address().port
 
 console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})