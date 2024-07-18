export default class Cl_vendedores {
    constructor() {
        this.contMayorista = 0;
        this.mayorVenta = 0;
        this.acumVentasMayorista = 0;
    }
    procesarVendedor(v){
        if(v.tipo == 1){    
            this.contMayorista++;
            this.acumVentasMayorista += v.montoVentas;
            if(v.montoVentas > this.mayorVenta){
                this.mayorVenta = v.montoVentas;
            }
        }
}
}