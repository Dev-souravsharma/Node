const fs = require("fs");

const path = "./data/file.txt";
const text = fs.readFileSync(path, "utf-8");
console.log("Read file", text);
