const path = require("path");
const fs = require("fs");
const fsAsync = require("fs").promises;
const folder = process.argv[2];
console.log(folder, __dirname);

//디랙토리 생성 함수
function createDirectory(dname) {
  const dirName = __dirname + path.sep + dname;
  fs.mkdir(dirName, (err) => {
    if (err && err.code != "EEXIST") throw "up";
    console.log("Already Exists!");
  });
}

createDirectory("video");
createDirectory("captured");
createDirectory("duplicated");

function fileMove(dname, file) {
  fs.rename(
    __dirname + path.sep + folder + path.sep + file,
    __dirname + path.sep + dname + path.sep + file,
    (error) => {
      console.log(error);
    }
  );
}

fs.readdir(__dirname + path.sep + "test", (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((file) => {
    const extention = path.extname(file);
    if (extention === ".jpg") {
      fileMove("duplicated", file);
    } else if (extention === ".mp4" || extention === ".mov") {
      fileMove("video", file);
    } else if (extention === ".png" || extention === ".aae") {
      fileMove("captured", file);
    }
  });
});
