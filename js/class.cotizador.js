class Cotizador {
    constructor(m2, factorPropiedad, factorUbicacion, CostoM2) {
        this.m2 = parseInt(m2);
        this.factorPr = parseFloat(factorPropiedad);
        this.factorUb = parseFloat(factorUbicacion);
        this.CostoM2 = parseFloat(CostoM2);
    }
    cotizar() {
        let resultado = this.m2 * this.factorPr * this.factorUb * this.CostoM2;
        return resultado.toFixed(2);
    }
}
