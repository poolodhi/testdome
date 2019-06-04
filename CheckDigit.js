function createCheckDigit(membershipId) {
  // Write the code that goes here.
  var data = membershipId
  var sum = 0
  
  while(data.length>1){
    sum = 0
    var x = data.split("")
    for(var i=0; i<x.length; i++){
      sum += parseInt(x[i])
    }
    data = sum.toString()
  }
  
  return sum;
}

console.log(createCheckDigit("55555"));
