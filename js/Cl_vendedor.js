export default class Cl_vendedor {
    constructor(nombre, tipo, montoVentas) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.montoVentas = montoVentas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set montoVentas(montoVentas) {
        this._montoVentas = montoVentas;
    }
    get montoVentas() {
        return this._montoVentas;
    }
}