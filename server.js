// console.log("hello");
const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
const { add } = require("./math");

console.log(add(3, 4));

const { readFile, writeFile } = require("fs");

readFile("./text/1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

writeFile("2.txt", "unad", (err) => {
  if (err) throw err;
});

process.on("uncaught error", (err) => {
  console.error(`Error:${err}`);
  process.exit(1);
});
