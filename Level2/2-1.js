function solution(n) {
    let answer = 0;
    let arr = [1, 1]; // 피보나치 수 담을 배열 초기화

    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2])%1234567; // 피보나치 수 계산 n-1 + n-2
    }

    answer = arr[n]; //피보나치 수 저장

    return answer;
}

console.log(solution(4))