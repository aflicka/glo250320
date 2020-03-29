let num       = 266219,
    numStr    = String(num),
    result    = 1;
 

for(i = 0; i < numStr.length; i++){
  result *= +numStr[i];
}

let resultPower = result**3,
    resultStr   = String(resultPower);
    
  alert(resultStr.substring(0, 2));
  console.log(resultPower);