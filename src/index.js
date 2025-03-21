const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

// Register CORS
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// Register routes
fastify.register(require('./src/signup'));

// Run the server
const start = async () => {
  try {
    await fastify.listen({ 
      port: process.env.PORT || 3000,
      host: '0.0.0.0'  // This is important for deployment
    });
    console.log(`Server is running on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 