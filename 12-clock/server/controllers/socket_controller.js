/**
 * Socket Controller
 */

const debug = require("debug")("clock:socket_controller");
let io = null; // socket.io server instance

/**
 * Handle a user disconnecting
 *
 */
const handleDisconnect = function () {
	debug(`Client ${this.id} disconnected :(`);
};

const handleHello = function () {
	debug(`hii`);
};

const handleStart = function (socket) {
	socket.broadcast.emit("clock:start");
	debug(`broadcast clock:start`);
};

const handleStop = function (socket) {
	socket.broadcast.emit("clock:stop");
	debug(`broadcast clock:stop`);
};

const handleReset = function (socket) {
	socket.broadcast.emit("clock:reset");
	debug(`broadcast clock:reset`);
};

/**
 * Export controller and attach handlers to events
 *
 */
module.exports = function (socket, _io) {
	// save a reference to the socket.io server instance
	io = _io;

	debug(`Client ${socket.id} connected`);

	// handle user disconnect
	socket.on("disconnect", handleDisconnect);

	socket.on("hewo", handleHello);

	socket.on("clock:start", () => handleStart(socket));
	socket.on("clock:stop", () => handleStop(socket));
	socket.on("clock:reset", () => handleReset(socket));
};
