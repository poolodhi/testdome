function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var date = userDate.split("/");
  date[0] = date[0].length === 1 ? "0"+date[0] : date[0]
  date[1] = date[1].length === 1 ? "0"+date[1] : date[1]
  return date[2]+date[0]+date[1] 
}

console.log(formatDate("12/31/2014"));
