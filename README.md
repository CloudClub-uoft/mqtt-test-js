# mqtt-test-js
A test MQTT server and client. 
Scripts index.js and client.js connect to a public MQTT broker and publish/subsrcibe to topics.
You can also connect to a local MQTT broker by downloading the Eclipse Mosquitto MQTT broker.

MQTT - An application layer resident.

  CONSTANT CONNECTION WITH A SERVER. 
  HTTP --> IT DOES NOT ALLOW

How to keep devices connected?

  By using a persistent connection.

Do we always need MQTT?

  MQTT is not required when you do not persistent connections. However, a device can be triggered to initiate an MQTT connection when required.

What about data logging?

  A No-SQL database is used for data logging purposes. 

Why No-SQL?

  It allows for flexibility of data to be inserted into the database and allows for faster writes.

A socket conenction needs to be opened up betwwen 2 computers on a network.
  
  to_connect 
    ip address
    port
  
  to_listen (server)
    port
    TCP/IP (file transfers, data btw this what HTTP), 
    UDP (video, live stream, )

