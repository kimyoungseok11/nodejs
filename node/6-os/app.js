const os = require("os");

//EOL은 줄바꿈 문자를 출력
console.log(os.EOL === "\n"); //mac의 경우 줄바꿈 문자가 \n
console.log(os.EOL === "\r\n"); //window의 경우 \r\n
