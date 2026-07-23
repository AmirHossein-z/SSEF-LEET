const answer = [];
const n = 5;

if (n <= 0 || n > Math.pow(10, 4)) {
  console.log("illegal n, not meet constraints...");
  return;
}

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer.push("FizzBuzz");
    continue;
  }
  if (i % 3 === 0) {
    answer.push("Fizz");
    continue;
  }
  if (i % 5 === 0) {
    answer.push("Buzz");
    continue;
  }
  answer.push(String(i));
}

console.log("answer: ", answer);
