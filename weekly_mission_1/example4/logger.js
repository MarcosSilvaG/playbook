class Logger {
    constructor(name, status) {
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name; // Estás variables se le conocen como atributos
        this.status = status; 
    }

    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    info(message) {
        console.log(`[ Objeto con nombre: ${this.name}, Status: ${this.status} ] info: ${message}`);
    }

    // método
    verbose(message) {
        console.log(`[ Objeto con nombre: ${this.name}, Status: ${this.status} ] verbose: ${message}`);
    }
}

// Esta clase se exporta en este módulo
module.exports = Logger;
