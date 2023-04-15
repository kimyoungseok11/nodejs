const fs = require("fs").promises;

//read file
fs.readFile("./file_test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//write file
fs.writeFile("./file.txt", "hello2").catch((error) => {
  console.log(error);
});

//파일에 내용 추가할 때
fs.appendFile("./file.txt", "hello3").catch((error) => {
  console.log(error);
});

//파일 복사
fs.copyFile("./file.txt", "./file2.txt").catch((error) => {
  console.log(error);
});

//디렉토리 생성
fs.mkdir("sub-folder").catch((error) => {
  console.log(error);
});

//현재 경로에 있는 모든 파일 읽기
fs.readdir("./")
  .then(console.log)
  .catch((error) => {
    console.log(error);
  });
