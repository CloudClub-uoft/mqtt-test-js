const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com');

const queryTopic = 'resolveMyQuery';
const responseTopic = 'responseFromServer';

mqttClient.on('message', function(topic, message) {
    // message is Buffer
    console.log('Received response from server:-', message.toString())
    mqttClient.end();
});

mqttClient.on('connect', function() {
    console.log('Client connected to Mqtt broker');
    // Subscribe to the response topic 
    mqttClient.subscribe(responseTopic);
    // Publish message
    mqttClient.publish(queryTopic, 'Hello server, can you hear me?');
    console.log('Published to server...');

});


// printNumbers(5, 10);
// mqtt test command. Connects to the mosquitto MQTT test server.
// mosquitto_sub -h test.mosquitto.org -t "#" -v