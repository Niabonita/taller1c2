
var inventario = {};
function agregarProducto() {
    var productName = document.getElementById("productName").value;
    var productPrice = parseFloat(document.getElementById("productPrice").value);
    var productStock = parseInt(document.getElementById("productStock").value);
    if (!inventario[productName]) {
        inventario[productName] = {
            precio: productPrice,
            stock: productStock
        };
        document.getElementById("estadoInventario").innerHTML = "El producto se ha agregado éxitosamente";
    } else {
        document.getElementById("estadoInventario").innerHTML = "Este  producto ya existe en el inventario";
    }
}
function registrarVenta() {
    var productToSell = document.getElementById("productToSell").value;
    var quantitySold = parseInt(document.getElementById("quantitySold").value);

    if (inventario[productToSell] && inventario[productToSell].stock >= quantitySold) {
        inventario[productToSell].stock -= quantitySold;
        var totalVenta = inventario[productToSell].precio * quantitySold;
        document.getElementById("estadoInventario").innerHTML = "La venta ha sido exitosa. Total: $" + totalVenta + ". Productos disponibles: " + inventario[productToSell].stock;
    } else {
        document.getElementById("estadoInventario").innerHTML = "El producto no se ha encontrado o hay insuficientes unidades disponibles.";
    }
}