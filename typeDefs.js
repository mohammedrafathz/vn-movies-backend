const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Vehicle {
    _id: ID
    image: String
    make: String
    vehicleModel: String
    year: Int  
    price: Int
    status: Boolean
  }

  type Query {
    hello: String
    getAllVehicles: [Vehicle]
    getVehicleById(id: String): Vehicle
  }

  input VehicleInput {
    image: String
    make: String
    vehicleModel: String
    year: Int  
    price: Int
    status: Boolean
  }

  type Mutation {
    addNewVehicle(vehicle: VehicleInput): Vehicle
    updateVehicle(id: String, vehicle: VehicleInput): Vehicle
    deleteVehicle(id: String): String
  }
`

module.exports = typeDefs;