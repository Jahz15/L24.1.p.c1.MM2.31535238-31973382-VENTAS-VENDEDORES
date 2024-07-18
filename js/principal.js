/**Se conoce el nombre, tipo de vendedor (1=Mayorista, 2=Minorista) y monto de ventas de 
varios vendedores. Se desea determinar Monto total de la ventas de los vendedores Mayoristas 
y mayor venta realizada por los vendedores tipo mayorista. 
Se dispone de los siguientes datos de varias vendedores: (nombre, tipo de vendedor, monto 
venta) (Mary, 1, 150), (José, 1, 135), (Carlos, 2, 160), (Pedro, 2,  75)  */
import Cl_vendedor  from "./Cl_vendedor.js";
import Cl_vendedores from "./Cl_vendedores.js";

let vendedores = new Cl_vendedores();

let v1 = new Cl_vendedor("Mary", 1, 150);
let v2 = new Cl_vendedor("José", 1, 135);
let v3 = new Cl_vendedor("Carlos", 2, 160);
let v4 = new Cl_vendedor("Pedro", 2, 75);

vendedores.procesarVendedor(v1);
vendedores.procesarVendedor(v2);
vendedores.procesarVendedor(v3);
vendedores.procesarVendedor(v4);

let salida=document.getElementById("salida");

salida.innerHTML =`
Monto total de las ventas de los vendedores tipo mayorista: ${vendedores.acumVentasMayorista}$<br>
Monto mayor venta realizada por los vendedores tipo mayorista: ${vendedores.mayorVenta}$`