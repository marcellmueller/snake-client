const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Connected to server!");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // client.js
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: MLM");
  });
  return conn;
};

connect();

module.exports = connect;
