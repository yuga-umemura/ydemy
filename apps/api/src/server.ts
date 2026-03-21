import { Server, ServerCredentials } from "@grpc/grpc-js";
import { CategoryQueryService } from "@ydemy/protobuf/category_query";
import { CategoryQueryController } from "./controllers/category";
import { enableReflection } from "@ydemy/protobuf";

const port = process.env.PORT ?? 50051;

function getServer() {
  const server = new Server();

  server.addService(CategoryQueryService, CategoryQueryController);

  if (process.env.NODE_ENV !== "production") {
    enableReflection(server);
  }

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
    },
  );
}
startServer();
