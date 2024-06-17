import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("oi");

  return response.end();
});

server.listen(3333);
