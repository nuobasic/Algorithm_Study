function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  //   if (arr.length > max) {
  //     return max;
  //   } else {
  //     return arr.length;
  //   }

  return arr.length > max ? max : arr.length;
}

const arr1 = [3, 3, 1, 2];
console.log(solution(arr1));
