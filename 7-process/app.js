const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.cpuUsage());

process.nextTick(() => {
  //작업이 다 끝난뒤 콜백함수를 실행
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
