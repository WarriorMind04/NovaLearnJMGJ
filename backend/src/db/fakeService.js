const DBService = require('./dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();

    const dummyStudents = [
      {
        username: 'ana.t',
        password: 'libro123',
        fullName: 'Ana Torres',
        favoriteBook: 'Cien Años de Soledad',
      },
      {
        username: 'marco.r',
        password: 'lectura456',
        fullName: 'Marco Ramírez',
        favoriteBook: 'El Principito',
      },
      {
        username: 'sofia.m',
        password: 'novela789',
        fullName: 'Sofía Morales',
        favoriteBook: 'Orgullo y Prejuicio',
      },
    ];

    dummyStudents.forEach((student) => {
      this.students.set(student.username, student);
    });
  }

  async findStudentByUsernameAndPassword(username, password) {
    const student = this.students.get(username);
    if (student && student.password === password) {
      return student;
    }
    return null;
  }
}

module.exports = FakeService;
