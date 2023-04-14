const buf = Buffer.from("Hi");

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); //문자열 형태로 기본 값 utf-8

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2);
console.log(buf3);
