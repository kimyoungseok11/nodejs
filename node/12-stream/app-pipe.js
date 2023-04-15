const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
// const writeStream = fs.createWriteStream("./file4.txt");
const writeStream = fs.createWriteStream("./file4.zip"); // 압축파일 생성
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!");
});
