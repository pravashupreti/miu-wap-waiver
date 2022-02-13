var events = require("events")
var eventEmmiter = new events.EventEmitter();

class Server {
    constructor(name, port) {
        this.name = name
        this.port = port
    }

    handle() {
        console.log(`${this.name} request is handled from port ${this.port}`)
    }

}

const webServer = new Server("Http", 443)
const ftpServer = new Server("FTP", 22)


eventEmmiter.on("http-request", webServer.handle.bind(webServer))
eventEmmiter.on("ftp-request", ftpServer.handle.bind(ftpServer))



// Emit random events
setInterval(() => {
    var rand = Math.floor((Math.random() * 10))

    if (rand % 2 == 0) {
        eventEmmiter.emit('http-request')
    } else {
        eventEmmiter.emit('ftp-request')
    }

}, 100)