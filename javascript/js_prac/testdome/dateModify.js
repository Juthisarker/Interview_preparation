function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
 let userDatw = userDate.split("/");
 let[month, day, year] = userDatw;
 if(day.length === 1) day = `0${day}`;
 if(month.length === 1) month = `0${month}`;

 return `${year}${month}${day}`;
}

// console.log(formatDate("12/31/2014"));


function formateDate(date) {

  let userdt = date.split("/");
  let [month, day, year] = userdt;
  if(day.length === 1) day = `0${day}`;
  if(month.length === 1) month = `0${month}`;

  return `${year}${month}${day}`
}
console.log(formateDate("12/31/2014"));
