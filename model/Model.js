class Model {

  data = [
    { id: 1, palabra: "perro" },
    { id: 2, palabra: "gato" },
  ];

  getFrase = () => {
    //     return this.data.join(" ");
    return this.data;
  };


  create = (palabra) => {
    const id = this.data[this.data.length - 1].id+1
    this.data.push({
      id,
      palabra,
    });
    return "ok";
  };

  delete = (palabra) => {

    // Filtrar las palabras que coinciden con la palabra indicada y eliminarlas
    const longitudInicial = this.data.length;
    this.data = this.data.filter(item => item.palabra !== palabra);
    
    const palabrasEliminadas = longitudInicial - this.data.length;
    return palabrasEliminadas;
  };
  


}

export default Model;
