const Vehicle = require('./models/Vehicle');

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World"
    },
    getAllVehicles: async () => { 
      return await Vehicle.find();ƒ
    }
  }
}

module.exports = resolvers;