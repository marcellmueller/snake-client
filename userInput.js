const { MOVEUP, MOVEDOWN, MOVELEFT, MOVERIGHT } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = (key) => {
  if (key === "\u0077") {
    connection.write(MOVEUP);
  } // ctrl-c
  if (key === "\u0061") {
    console.log("s");
    connection.write(MOVEDOWN);
  } // ctrl-c
  if (key === "\u0073") {
    connection.write(MOVELEFT);
  } // ctrl-c
  if (key === "\u0064") {
    connection.write(MOVERIGHT);
  } // ctrl-c
  if (key === "\u0077") {
    connection.write("Say: What up homies?");
  } // ctrl-c
  if (key === "\u0065") {
    connection.write("Say: Are we winning yet?");
  } // ctrl-c
  if (key === "\u0072") {
    connection.write("Say: Let's a go!");
  } // ctrl-c
  if (key === "\u0003") {
    console.log("Thanks for playing!");
    process.exit();
  } // ctrl-c
};

module.exports = setupInput;
