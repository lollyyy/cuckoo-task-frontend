import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3002')

function subscribeToTimer(cb) {
	socket.on('timer', timestamp => cb(null, timestamp))
	socket.emit('subscribeToTimer', 5000)
}

function getLists(cb) {
	socket.on('lists', lists => {
		console.log(lists)
		cb(null, lists)
	})
	socket.emit('getLists', 5000)
}

export {subscribeToTimer, getLists}