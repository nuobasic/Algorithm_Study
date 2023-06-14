// function decimal(x) {
//   for (let i = 2; i <= Math.sqrt(x) ; i++) {
//     if (x % i === 0) return false;
//   }
//   return true;
// }

// function solution(n) {
//   let answer = 0;

//   for (let i = 2; i <= n; i++) {
//     if (decimal(i)) answer++;
//   }
//   return answer;
// }
// console.log(solution(10));

function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i + i; j <= n; j += i) {
      if (arr[j] === 0) {
        continue;
      }
      arr[j] = 0;
    }
  }
  return arr.filter((e) => e !== 0).length;
}

console.log(solution(10));
