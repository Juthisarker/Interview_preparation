// const response = fetch("https://reqbin.com/echo/get/json", {
//   method: "GET", // *GET, POST, PUT, DELETE, etc
//   headers: {
//     "Content-Type": "application/json", // header
//   },
// });
// // driver code
// response
//   .then((response) => {
//     const responseData = response.json();
//     responseData.then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchMovies(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
          method: "GET", 
          headers: {
            "Content-Type": "application/json", // header
          },});

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
 const data = await response.json();     
 console.log(data);
   return data;
}
fetchMovies();
 //let output = await fetchMovies();
 

