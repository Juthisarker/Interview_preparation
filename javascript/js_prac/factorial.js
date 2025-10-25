    // A Function to find the string having the minimum
    // length and returns that length
    function findMinLength(arr,n)
    {
        let min = arr[0].length;
        for (let i = 1; i < n; i++)
        {
            if (arr[i].length < min)
            {
                min = arr[i].length;
            }
        }
   
        return (min);
    }
     
    // A Function that returns the longest common prefix
    // from the array of strings
    function commonPrefix(arr,n)
    {
        let minlen = findMinLength(arr, n);
        let result = ""; // Our resultant string
        let current; // The current character
        for (let i = 0; i < minlen; i++)
        {
            // Current character (must be same
            // in all strings to be a part of
            // result)
            current = arr[0][i];
             console.log(arr[0][i]);
            for (let j = 1; j < n; j++)
            {
                if (arr[j][i] != current)
                {
                    return result;
                }
            }
   
            // Append to result
            result += (current);
        }
   
        return (result);
    }
     
    // Driver program to test above function
    let arr=["geeksforgeeks", "geeks",
            "geek", "geezer"]
    let n = arr.length;
     
    let ans = commonPrefix(arr, n);
    if (ans.length > 0) {
        console.log("The longest common prefix is "
                + ans);
    } else {
        console.log("There is no common prefix");
    }
     
    //  This code is contributed by avanitrachhadiya2155

    function factorial11(n) {
      if(n==0) return 1;
      else
       return n*factorial11(n-1);
    }
    console.log(factorial11(5));