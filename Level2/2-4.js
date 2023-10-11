function solution(s) {
  let zeroCnt = 0;
  let cnt = 0;
  while (s !== "1") {
    //1이 될 때까지 반복
    cnt += 1; //반복문 돌때마다 카운트
    zeroCnt += (s.match(/0/g) || "").length; //0을 찾아 배열로 변환 수 수 카운트
    s = s.replace(/0/g, "").length.toString(2); //0제거 길이 이진변환
  }
  return [cnt, zeroCnt];
}

console.log(solution(110010101001));
