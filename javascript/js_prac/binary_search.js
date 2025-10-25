// // A recursive binary search function. It returns
// // location of x in given array arr[l..r] is present,
// // otherwise -1
// function binarySearch(arr, l, r, x){
//     if (r >= l) {
//         let mid = l + Math.floor((r - l) / 2);
 
//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == x)
//             return mid;
 
//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > x)
//             return binarySearch(arr, l, mid - 1, x);
 
//         // Else the element can only be present
//         // in right subarray
//         return binarySearch(arr, mid + 1, r, x);
//     }
 
//     // We reach here when element is not
//     // present in array
//     return -1;
// }
 
// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 10;
// let n = arr.length
// let result = binarySearch(arr, 0, n - 1, x);
// (result == -1) ? console.log( "Element is not present in array")
//                    : console.log("Element is present at index " +result);

//iterative way

function binarySearch_iterative(arr, x){
    let l = 0, r = n-1;
    while(r>=l){
      let  mid = l+ Math.floor((r-l)/2);
        if(arr[mid]===x) return mid;
        if(arr[mid]>x) r = mid - 1 ;
        l = mid + 1 ;
    }
    return -1;
}

let arr = [3,6,7,9,20];
let n = arr.length;
let output = binarySearch_iterative( arr, 9 );
output == -1 ? console.log("not present"): console.log(`present ${output}`);

function binarySearcjjjjj( arrr, n){
   let l =0, r = n-1;
   while(r>=l){
    let mid = Math.floor((r-l)/2);
    if(arrr[mid]===x) return mid;
    if(arrr[mid]>x) r =mid -1 ;
    l = mid + 1;
   }
}


function binarySearchhhhh(arr, target) {
  let l = 0, r = n-1;
  while(r>=l){
    let mid = l + Math.floor((r-l)/2);
    if(arr[mid]===target) return mid;
    if(arr[mid]>target) r = mid -1;
    l = mid+1
  }
}