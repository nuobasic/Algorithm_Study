function solution(babbling) {
  let answer = 0;
  const arr = ["aya", "ye", "woo", "ma"];
  let word = "";

  for (let i = 0; i < babbling.length; i++) {
    word = babbling[i];

    for (let j = 0; j < arr.length; j++) {
      //word 안에서 arr[j]에 해당하는 문자열을 ' '로 치환
      word = word.replaceAll(arr[j], " ");
    }

    if (word.trim().length === 0) {
      //공백제거 길이가 0이면 가능
      answer++;
    }
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
