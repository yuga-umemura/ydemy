import { Server, ServerCredentials } from "@grpc/grpc-js";

const port = process.env.PORT ?? 50051;

function getServer() {
  const server = new Server();

  // server.addService()

  return server;
}

function startServer() {
  const server = getServer();

  server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`Server started and listening on ${port}`);
    }
  );
}
startServer();
