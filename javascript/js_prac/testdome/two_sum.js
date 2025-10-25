// function twoSum(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i+1; j< nums.length; j++) {
//         if(nums[i]+nums[j]===target)
//         {
//             console.log([i,j]);
//             return [i,j];
//         }
//     }
//   }
// }

function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement],i];
    }
    numObj[nums[i]] = i;
    console.log(numObj);
  }
 return null;
}
//twoSum([3, 1, 5, 7, 5, 9], 10);

function twoooSummmmm(arr, target) {

  let arrObj = {};
  for(let i = 0; i< arr.length; i++) {
    let complement =  target - arr[i] ;
    if(arrObj.hasOwnProperty(complement)) {
        return [arrObj[complement],i];
    }
    arrObj[arr[i]] = i ;
  }
}

//console.log(twoooSummmmm([5,6,9,4,3,1], 10));

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log((firstName ?? lastName ?? nickName ?? "Anonymous")); 