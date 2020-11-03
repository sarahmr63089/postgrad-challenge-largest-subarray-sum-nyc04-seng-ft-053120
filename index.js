// function largestSubarraySum(arr) {
//   // naive solution: find sums of all subarrays
//   let max = 0

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       let sum = arr.slice(i, j).reduce((acc, cur) => {
//         return acc + cur
//       })
//       if (sum > max) {
//         max = sum
//       }
//     }
//   }
//   return max
// }

var largestSubarraySum = function(nums) {
//   let max = nums[0]
  let max = 0
  let max_here = 0
  
  for (let i = 0; i < nums.length; i++){
      max_here += nums[i]
      if (max_here > max) {
          max = max_here
      } 
      if (max_here < 0) {
          max_here = 0
      }
  }
  return max
};

largestSubarraySum(arr)