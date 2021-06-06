require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI_MONGO;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

	try {
		// Connect the client to the server
		await client.connect();
		// Establish and verify connection
		await client.db("cloudtest").command({ ping: 1 });
		console.log("Connected successfully to server");
		return client;

	} catch (e) {
		console.log(e);
	}

}

async function get_items() {
	m_client = await run();
	var collection = m_client.db("cloudtest").collection("iot-data");
	const result = await collection.find({ lon: 45.999 }).toArray();
	console.log(result)
}

async function insert_items() {
	m_client = await run();
	var collection = m_client.db("cloudtest").collection("iot-data");
	document = { "temperature": 12, "lat": 12.123123123, lon: 45.999, device_id: 123, blah: 123123123, abc: "xyz" };
	collection.insertOne(document);
}

async function delete_everything() {
	await client.connect();
	var collection = client.db("cloudtest").collection("iot-data");
	// basic delete
	const r = await collection.deleteMany({});
	client.close();
}

async function find_items() {

	await client.connect();
	var collection = await client.db("cloudtest").collection("iot-data");
	var res = collection.find({ temperature: 12 }, { limit: 10 }).toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
		client.close();
	});

}

find_all_collections_async = async function () {
	await client.connect();
	res = await client.db("cloudtest");
	console.log(await res.listCollections().toArray());
	return;
}

find_all_collections = function () {
	client.connect().then((err, res) => {
		res.db("cloudtest").listCollections().toArray().then((array) => {
			console.log(array);
		});
		return;
	})
	return;
}

function find_all_collections_callback() {
	client.connect((err, client) => {

		if (err) {
			console.log(err);
			return;
		}

		console.log("Connected");
		var answer = client.db("cloudtest").listCollections().toArray((err, documents) => {
		
			if (err) {
				console.log(err);
				return;
			}
		
			console.log(documents)
			client.close();
		});
		return;
	})
}

// run();

// Insert some stuff
// Get some stuff
//insert_items();
// get_items();

// Find some stuff
// find_items();

// Delete everything
// delete_everything();

// Get a list of all the collections inside the database.
//find_all_collections();

// find_all_collections_async();

// Async Version
// find_all_collections_async().then(() => {
// 	process.exit();
// });

// find_all_collections_callback();
