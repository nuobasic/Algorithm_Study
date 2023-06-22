function solution(N, stages) {
  let answer = [];
  let failRate = []; //실패율 담을 배열
  let stayStages = 0; //스테이지에 머물러 있음
  let passStages = 0; // 스테이지 통과
  let notPassRate = 0; //

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        stayStages++; //스테이지에 머물러 있으면 카운트
      }
      if (i < stages[j]) {
        passStages++; //스테이지 패스 카운트
      }
    }
    notPassRate = stayStages / passStages; //실패율
    failRate.push({ N: i, failRate: notPassRate }); //각 스테이지의 실패율을 key value로 push
    stayStages = 0;
    passStages = 0;
  }
  failRate.sort((a, b) => b.failRate - a.failRate);
  failRate.map((row) => answer.push(row.N));

  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
