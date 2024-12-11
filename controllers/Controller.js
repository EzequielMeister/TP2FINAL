import Service from "../services/Service.js";


class Controller {

  service = new Service();

  getAllFrase = async (req, res) => {
    try {
      const data = await this.service.getAllFraseService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(422).send({ success: false, message: error.message });
    }
  };

  getPalabrasApi = async (req, res) => {
    try {
      const {cantidad}=req.params
      const data = await this.service.getPalabrasApiService(cantidad);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(422).send({ success: false, message: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const { palabra } = req.body;
      const data = await this.service.createService(palabra);
      res.status(200).send({ success: true, message: data, palabra });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message});
    }
  };

  delete = async (req, res) => {
    try {
      const { palabra } = req.params;
  
      // Eliminar la palabra en el servicio
      const data = await this.service.deleteService(palabra.trim());
  
      if (data.palabrasEliminadas > 0) {
        // Si se eliminó al menos una palabra, responder con éxito
        res.status(200).send({ success: true, message: `Palabra '${palabra}' eliminada correctamente.` });
      } else {
        // Si no se encuentra la palabra
        res.status(404).send({ success: false, message: `Palabra '${palabra}' no encontrada.` });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  
    
    
  };
  

export default Controller;
