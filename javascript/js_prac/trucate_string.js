function truncateString(str, num) {
    const doted = "...";
    if(str.length>num){
      return str.slice(0,num) + doted;
    }
    else {
        return str ;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));