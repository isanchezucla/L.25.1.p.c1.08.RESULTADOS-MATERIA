export default class Cl_estudiante {
    constructor(cedula, notaFinal) {
        this._cedula = cedula;
        this._notaFinal = notaFinal;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = +notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
 }