const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { v4: uuid } = require("uuid");

const runCode = (language, code) => {
  return new Promise((resolve, reject) => {
    const jobId = uuid();

    const tempDir = path.join(__dirname, "../temp", jobId);

    fs.mkdirSync(tempDir, { recursive: true });

    let filename = "";
    let dockerCommand = "";

    if (language === "python") {
      filename = "main.py";
    }

    if (language === "javascript") {
      filename = "main.js";
    }

    if (language === "cpp") {
      filename = "main.cpp";
    }

    const filePath = path.join(tempDir, filename);

    fs.writeFileSync(filePath, code);

    if (language === "python") {
      dockerCommand = `docker run --rm -v ${tempDir}:/app python-runner python /app/main.py`;
    }

    if (language === "javascript") {
      dockerCommand = `docker run --rm -v ${tempDir}:/app js-runner node /app/main.js`;
    }

    if (language === "cpp") {
      dockerCommand = `docker run --rm -v ${tempDir}:/app cpp-runner sh -c "g++ /app/main.cpp -o /app/main && /app/main"`;
    }

    exec(dockerCommand, (error, stdout, stderr) => {
      fs.rmSync(tempDir, {
        recursive: true,
        force: true,
      });

      if (error) {
        return reject(stderr || error.message);
      }

      resolve(stdout);
    });
  });
};

module.exports = {
  runCode,
};