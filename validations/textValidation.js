//Para validar que la palabra que me pidan no sea vacía y sólo con caracteres alfabéticos

export const esPalabraValida = (palabra) => {

return typeof palabra === "string" && /^[a-zA-Z]+$/.test(palabra.trim());
  
};
