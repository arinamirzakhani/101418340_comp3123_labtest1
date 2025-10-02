import fs from "fs/promises";
import path from "path";
import process from "process";

const logsDir = path.resolve(process.cwd(), "Logs");

async function main() {
  try {
  
    const stat = await fs.stat(logsDir).catch(() => null);
    if (!stat || !stat.isDirectory()) {
      console.log("No Logs directory to remove.");
      return;
    }

    
    const files = (await fs.readdir(logsDir)).sort();
    for (const f of files) {
      console.log(`delete files...${f}`);
      await fs.unlink(path.join(logsDir, f));
    }

 
    await fs.rmdir(logsDir);
  } catch (e) {
    console.error("Error removing logs:", e.message);
  }
}

main();
