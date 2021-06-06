const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();

app.get('/', (req, res) => {
	
	// client.db("cloudtest").collection("iot-data").find({}).toArray(function(err, result) {
	// 	if (err) throw err;		
	// 	res.send(result);
	// 	return;
	// });

	res.send("Hello, World.")

})

// For route parametres
app.get('/data/:name', (req, res) => {
	
	res.send(req.params.name);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


























// app.post('/data', (req, res) => {
// 	client.db("cloudtest").collection("iot-data").insertOne({device_id: req.headers.id})
// 	client.db("cloudtest").collection("iot-data").find({}).toArray(function(err, result) {
// 		if (err) throw err;		
// 		res.send(result);
// 		return;
// 	});
// })

// client.connect((err, client)=> {
// 	client.db("cloudtest").command({ping: 1});
// });