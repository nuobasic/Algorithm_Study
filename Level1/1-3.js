function decimal(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (decimal(i)) answer++;
  }
  return answer;
}
console.log(solution(10));
