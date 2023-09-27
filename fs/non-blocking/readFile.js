const fs = require("fs");

const path = "../data/fil.txt";

function fn(error, data) {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
}

fs.readFile(path, "utf-8", fn);
