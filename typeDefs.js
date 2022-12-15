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
  }
`

module.exports = typeDefs;