const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  //   highWaterMark: 8, // 설정안하면 64 kbytes
  encoding: "utf-8",
});

readStream
  .on("data", (chunk) => {
    console.log(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log("end!");
  });

readStream.on("error", (error) => {
  console.log(error);
});
