const Vehicle = require('./models/Vehicle');

const resolvers = {
  Query: {
    getAllVehicles: async () => {
      return await Vehicle.find(); ƒ
    },
    getVehicleById: async (parent, {id}, context, info) => {
      return await Vehicle.findById(id);
    }
  },
  Mutation: {
    addNewVehicle: async (parent, {vehicle}, context, info) => {
      const veh = await new Vehicle({...vehicle}).save();

      return veh
    },
    updateVehicle: async (parent, {id, vehicle}, context, info) => {
      const veh = await Vehicle.findByIdAndUpdate(id, vehicle, {new: true})

      return veh;
    },
    deleteVehicle: async (parent, {id}, context, info) => {
      await Vehicle.findByIdAndDelete(id);

      return "Successfully deleted vehicle";
    }
  }
}

module.exports = resolvers;