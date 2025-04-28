const SchoolDBFactory = require("../school");

// Instancia el servicio que quieras (en este caso 'fake')
const db = SchoolDBFactory.create('fake');

class LoginService {
  async login(username, password) {
    const student = await db.findStudentByUsernameAndPassword(username, password);
    if (!student) {
      throw new Error("Usuario o contraseña incorrectos.");
    }
    return student;
  }
}

const loginService = new LoginService();

module.exports = { loginService };
