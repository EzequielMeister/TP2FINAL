//Para validar que la palabra que me pidan no sea vacía y sólo con caracteres alfabéticos

export const esPalabraValida = (palabra) => {

return typeof palabra === "string" && /^[a-zA-Z]+$/.test(palabra.trim());

    /*
    MAS VALIDACIONES (DE ESTA MANERA ES MEJOR POR QUE YA LA VALIDACION TE TIRA EL ERROR Y TE EVITAS PONER UN TRY CATCH O VARIOS IF EN EL SERVICIO)

    export const validarJuego = (juego) => {

    if (!juego.nombre || typeof juego.nombre !== "string" || !/^[a-zA-Z\s]+$/.test(juego.nombre)) {
    throw new Error("El nombre del juego es inválido");
    }

    if (!juego.categoria || typeof juego.categoria !== "string") {
      throw new Error("La categoría del juego es inválida");
    }

    if (!juego.precio || typeof juego.precio !== "number" || juego.precio <= 0) {
      throw new Error("El precio del juego es inválido");
    }

    if (!juego.stock || typeof juego.stock !== "number" || juego.stock < 0) {
      throw new Error("El stock del juego es inválido");
    }
  };
  

    export const validarVenta = (venta) => {

    if (!venta.idJuego || typeof venta.idJuego !== "number") {
      throw new Error("El ID del juego es inválido");
    }

    if (!venta.cantidad || typeof venta.cantidad !== "number" || venta.cantidad <= 0) {
      throw new Error("La cantidad vendida es inválida");
    }
  };
  

    */
  
};
