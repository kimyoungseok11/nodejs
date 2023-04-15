console.log("lodding...");
console.clear();

console.log("log"); //개발용 로그
console.warn("warning"); //정보
console.info("info"); // warning 출력용
console.error("error"); //치명적인 버그 출력

console.assert(2 === 3, "not same"); //앞의 인자가 false인 경우 뒤의 인자를 출력
console.assert(2 === 2, "same"); //조건에 따라 출력할 경우

const student = { name: "ddd", age: 20 };
console.log(student);
console.table(student); // 객체를 출력할때 테이블 형태로 출력
console.dir(student);

console.time("for loop"); //성능 궁금할때 사용하면 좋음
for (let i = 0; i <= 10; i++) {
  i++;
}
console.timeEnd("for loop");
