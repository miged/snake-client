let connection;
const { KEYS } = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => handleUserInput(data));

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('exiting..');
    process.exit();
  }

  // Movement
  if (key === KEYS.MOVE_UP) {
    connection.write("Move: up");
  }
  if (key === KEYS.MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (key === KEYS.MOVE_RIGHT) {
    connection.write("Move: right");
  }
  if (key === KEYS.MOVE_DOWN) {
    connection.write("Move: down");
  }

  // Messages
  if (key === "q") {
    connection.write("Say: Hi!");
  }
};

module.exports = { setupInput, handleUserInput };
