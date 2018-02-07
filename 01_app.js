const express = require ('express');
const app = express ();
let compteur = 0;
console.log ('init compteur = ' + compteur);

app.get ('/', (req, res) => {
	console.log ('incrémente compteur dans route = ' + compteur++);
	req.send('<h1>Vive Express</h1>');
})

const server = app.listen(8080, () => {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})