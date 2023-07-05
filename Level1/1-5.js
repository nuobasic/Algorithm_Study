function solution(dartResult) {
  let num = 0;
  let arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    //console.log("111111111111111: " + dartResult.length);
    if (!isNaN(dartResult[i])) {
      num = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    }

    if (dartResult[i] === "S") arr.push(num);
    if (dartResult[i] === "D") arr.push(Math.pow(num, 2));
    if (dartResult[i] === "T") arr.push(Math.pow(num, 3));
    if (dartResult[i] === "*") {
      arr[arr.length - 2] *= 2;
      arr[arr.length - 1] *= 2;
    }
    if (dartResult[i] === "#") arr[arr.length - 1] *= -1;
  }

  return arr.reduce((a, b) => a + b, 0);
}
