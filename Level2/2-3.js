function solution(citations) {
  citations.sort((a, b) => b - a); //내림차순 정렬

  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      //인용횟수가 많으면 ++
      answers++;
    }
  }

  return answers;
}
console.log(solution([3, 0, 6, 1, 5]));
