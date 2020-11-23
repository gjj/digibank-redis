const redis = require("redis");
const client = redis.createClient();

client.on("connect", function() {
  console.log("You are now connected");
});

client.set("someKey", "someValue", function(err, reply) {
  console.log(reply);
});

client.get("someKey", function(err, reply) {
  console.log(reply);
});
