import express from "express";
import cors from "cors";
import { testDB } from "./database/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/review/index.js";

const server = express();
server.use(express.json());

server.use(cors());

const { port = 5001 } = process.env;

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);

const initialize = async () => {
  try {
    server.listen(port, async () => {
      console.log("server is running on port " + port);
      await testDB();
    });

    server.on("error", (error) => {
      console.log("server error: " + error);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

initialize();
