const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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

module.exports = connect;
