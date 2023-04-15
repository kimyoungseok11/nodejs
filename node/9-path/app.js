const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.delimiter);
console.log(path.sep); // 경로 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js")); //출력할때 특정 문자열 제외

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); //절대 경로인지 아닌지 확인
console.log("isAbsolute?", path.isAbsolute("../"));

//normalize
console.log(path.normalize("./folder/////sub")); //잘못된 경로를 수정

//join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image")); //디렉토리 만들어줌
