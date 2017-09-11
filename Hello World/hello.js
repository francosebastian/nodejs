var http = require("http");

var manejador = function (solicitud, respuesta) {
    console.log("Recibimos una nueva peticions");
    respuesta.end("Hola este es mi primera peticion en Node JS");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);