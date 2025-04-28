class StudentHttpHandler {
    constructor(studentController) {
      this.studentController = studentController;
    }
  
    async login(req, res) {
      try {
        const { username, password } = req.body;
        const student = await this.studentController.login(username, password);
        
        res.status(200).json({
          fullName: student.fullName,
          favoriteBook: student.favoriteBook,
        });
      } catch (error) {
        res.status(401).json({ error: error.message });
      }
    }
  }
  
  module.exports = StudentHttpHandler;
  