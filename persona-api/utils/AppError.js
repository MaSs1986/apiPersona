class AppError extends Error {
    constructor(mensaje, codigoEstado) {
        super(mensaje);
        this.codigoEstado = codigoEstado;
        this.esOperacional = true;

        Error.captureStackTrace(this, this.constructor);
    }

}

module.exports = AppError;