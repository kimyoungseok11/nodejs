const path = require("path");
const fs = require("fs");
const os = require("os");

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);

//디렉토리가 있는지 검사함
if (!folder || !fs.existsSync(workingDir)) {
  console.log("please enter folder name in pictures");
  return;
}

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
    workingDir + path.sep + file,
    workingDir + path.sep + dname + path.sep + file,
    (error) => {
      console.log(error);
    }
  );
}

fs.readdir(workingDir, (err, files) => {
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
