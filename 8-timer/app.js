let num = 1;
const interval = setInterval(() => {
  console.log(num);
  num++;
}, 1000);

setTimeout(() => {
  console.log("clear");
  clearInterval(interval);
}, 6000);
