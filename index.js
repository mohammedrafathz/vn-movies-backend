const express = require('express');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

require('dotenv').config();

mongoose
  .connect(process.env.MONGOURI, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground()
    ]
  })
  
  await apolloServer.start();
  apolloServer.applyMiddleware({app: app, path:"/"})

  app.listen(4000, () => console.log('Server started on port 4000'))
};

startServer();