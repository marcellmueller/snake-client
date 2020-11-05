const connect = require("./client");
const setupInput = require("./userInput");

/**
 * Establishes connection with the game server
 */
console.log("Connecting ...");
connect();

let connection = connect();
setupInput(connection);
