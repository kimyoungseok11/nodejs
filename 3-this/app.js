function hello() {
  console.log(this); //함수안에서 this는 글로벌
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("------ class ------");
    console.log(this); //클래스에서 this는 자기자신
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log("----- global scope -----");
console.log(this);
console.log(this === module.exports); //node에서 this는 module.exports
