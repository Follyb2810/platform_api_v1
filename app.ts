
import express from "express";
import { authRoutes } from "./auth/routes";

export function createServer() {
  const app = express();
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.listen(4000, () => console.log("Platform API running"));
}
