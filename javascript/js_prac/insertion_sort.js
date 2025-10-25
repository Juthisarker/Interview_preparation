function insertionSort(arr,n){
  let item,j;
    for(let i =1; i< n; i++)
    {
        item = arr[i];
         
        j = i-1 ;
        while (j>= 0 && arr[j]<item) {
            arr[j+1] = arr[j] ;
            j = j-1 ;
        }

        arr[j+1] = item ;
        
    }
    return arr ;
}

let arr = [2,5,3,7,1];
let n = arr.length;
let result = insertionSort(arr,n);
console.log(result);