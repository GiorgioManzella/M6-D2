import express from "express";
import cors from "cors";
import { testDB, syncDB } from "./database/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/review/index.js";
import categoryRouter from "./services/category/index.js";
import userRouter from "./services/users/index.js";

const server = express();
server.use(express.json());

server.use(cors());

const { port = 5001 } = process.env;

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);
server.use("/category", categoryRouter);
server.use("/user", userRouter);

const initialize = async () => {
  try {
    server.listen(port, async () => {
      console.log("server is running on port " + port);
      await testDB();
      await syncDB();
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
