const fs = require("fs");

const path = "./data/file2.txt";
const text = "I'm writing in file2";
fs.writeFileSync(path, text);
