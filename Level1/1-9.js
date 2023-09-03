function solution(number, limit, power) {
  const arr = Array.from(Array(number), (_, index) => index + 1);
  return arr
    .map((num) => {
      if (num === 1) return num;
      let count = 0;
      for (let n = 1; n <= Math.sqrt(num); n++) {
        if (num % n === 0) {
          count += num / n === n ? 1 : 2; //약수의 쌍 처리
        }
      }
      return count <= limit ? count : power;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solution(10, 3, 2));
