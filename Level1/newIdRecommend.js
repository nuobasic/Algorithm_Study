function solution(new_id) {
    const answer = new_id
        .toLowerCase() //   소문자로 변경
        .replace(/[^a-z0-9\-_\.]/g, '') // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
        .replace(/\.{2,}/g, '.') // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
        .replace(/^\.*|\.*$/g, '') //마침표(.)가 처음이나 끝에 위치한다면 제거
        .replace(/^$/, 'a') // 빈 문자열이라면,  "a"를 대입
        .slice(0, 15) //길이가 16자 이상이면 15까지 자름
        .replace(/\.$/, '');  // 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    const len = answer.length;
    return len > 2 ? answer : answer.padEnd(3,answer[len-1]); // 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
}


console.log(solution("...!@BaT#*..y.abcdefghijklm"))