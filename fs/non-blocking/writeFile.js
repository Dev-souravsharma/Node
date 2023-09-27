const fs = require("fs");

const path = "../data/file3.txt";
const data = "non-blocking write code";

function fn(error) {
  if (error) {
    console.log("🚀 ~ file: writeFile.js ~ line 8 ~ fn ~ error", error.message);
    return;
  }
}

fs.writeFile(path, data, "utf-8", fn);
