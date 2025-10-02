import fs from "fs/promises";
import path from "path";
import process from "process";

const logsDir = path.resolve(process.cwd(), "Logs");

async function main() {
  try {
 
    await fs.mkdir(logsDir, { recursive: true });

    
    process.chdir(logsDir);

    
    for (let i = 0; i <= 9; i++) {
      const file = `log${i}.txt`;
      const content = `This is log file #${i}\nTimestamp: ${new Date().toISOString()}\n`;
      await fs.writeFile(file, content, "utf8");
    }

    
    const files = (await fs.readdir(process.cwd())).sort();
    files.forEach((f) => console.log(f));
  } catch (e) {
    console.error("Error creating logs:", e.message);
  }
}

main();
