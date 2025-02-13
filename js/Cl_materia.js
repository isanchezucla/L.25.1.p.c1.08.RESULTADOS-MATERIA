export default class Cl_materia {
    constructor() {
        this.contEstudiantes = 0;
        this.contAprobados = 0;
        this.contReprobados = 0;
        this.acumNotas = 0;
    }
    procesarEstudiante(e) {
        this.contEstudiantes++;
        this.acumNotas += e.notaFinal;
        if (e.notaFinal >= 48) {
            this.contAprobados++;
        }
         if (e.notaFinal < 48) {
            this.contReprobados++;
        }
    }
    cantAprobados() {
        return this.contAprobados;
    }
    cantReprobados() {
        return this.contReprobados;
    }
    promedio() {
        return this.acumNotas / this.contEstudiantes;
    }
}