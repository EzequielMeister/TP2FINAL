import Model from "../model/Model.js";

class Service {
  model = new Model();

  getAllFraseService = async () => {
    try {
      const data = this.model.getFrase();
      const frase = data.map((palabra) => palabra.palabra).join(" ");
      return frase;
    } catch (error) {
      throw error;
    }
  };

}

export default Service;
