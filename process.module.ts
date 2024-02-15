import { Module } from "danet/mod.ts";
import { ProcessController } from "./src/process.controller.ts";
import { ProcessManager } from "./src/process.service.ts";

@Module({
  controllers: [
    ProcessController
  ],
  injectables: [
    ProcessManager
  ],
})
export class ProcessModule {}
