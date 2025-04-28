const FakeService = require('./fakeService');
// Si más adelante tuvieras servicios reales:
// const PostgresService = require('./postgresService');
// const MongoService = require('./mongoService');

class SchoolDBFactory {
  static create(type, connectionString) {
    switch (type.toLowerCase()) {
      case 'fake':
        return new FakeService();
      // Agregarías aquí otros servicios reales:
      // case 'postgres':
      //   return new PostgresService(connectionString);
      // case 'mongo':
      //   return new MongoService(connectionString);
      default:
        throw new Error(`Tipo de servicio desconocido: ${type}`);
    }
  }
}

module.exports = SchoolDBFactory;
