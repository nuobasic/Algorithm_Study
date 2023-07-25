function solution(name, yearning, photo) {
  var answer = [];

  for (const x of photo) {
    let sum = 0;
    for (let j = 0; j < name.length; j++) {
      if (x.includes(name[j])) {
        sum += yearning[j];
      }
    }
    answer.push(sum);
  }
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
