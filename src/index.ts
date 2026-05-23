import { startBot } from "./bot/index.js";

startBot().catch((err) => {
  console.error("[Fatal] Bot failed to start:", err);
  process.exit(1);
});
