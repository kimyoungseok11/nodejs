const fs = require("fs");

//rename(..., callback) - 비동기
//renameSync(...) - 동기
//promise.rename().then().catch(0)

try {
  fs.renameSync("./file.txt", "./file_test.txt");
} catch (error) {
  console.error(error);
}
console.log("hello");

fs.rename("./file_test.txt", "./file.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./file.txt", "./file_test.txt")
  .then(() => console.log("Done"))
  .catch(console.error());
