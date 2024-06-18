// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write("oi");
//   return response.end();
// });

// server.listen(3333);

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// CRUD - Create, Read, Update, Delete

// GET, POST, PUT, DELETE, PATCH

// POST http://localhost:3333/videos

// Route paremeter

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  return "Hello Rocket";
});

// PUT http://localhost:3333/videos/3

server.put("/videos/:id", () => {
  return "Hello Node";
});

server.delete("/videos/:id", () => {
  return "Hello Delete";
});

server.listen({
  port: 3333,
});
