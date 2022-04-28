let precioDeProducto: number = Number(prompt("¿precio?")); //Valor del producto
let cantidad: number = Number(prompt("Cantidad?")); // Cantidad del producto
let compra: number = precioDeProducto * cantidad; // Total
const descuento: number = 0.1; //Descuento del %10
if (compra > 1000) {
  //Si la compra es mayor a 1000 se aplicara
  let valorDescuento: number = compra * descuento; //Total del descuento
  let descuentoAplicado: number = compra - valorDescuento; //Descuento  aplicado
  console.log(descuentoAplicado);
} else {
  console.log(compra);
}
