class StudentController {
    constructor(service) {
      this.service = service;
    }
  
    async login(username, password) {
      const student = await this.service.login(username, password);
      if (!student) throw new Error('Usuario o contraseña incorrectos.');
      return student;
    }
  }
  
  module.exports = StudentController;
  