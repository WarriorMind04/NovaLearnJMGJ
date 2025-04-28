class DBService {
    constructor() {
      if (new.target === DBService) {
        throw new Error("DBService es una clase abstracta y no puede ser instanciada directamente.");
      }
    }
  }
  
  module.exports = DBService;
  