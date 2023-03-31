//Business logic

function beepBoopNeighbor(number){
  let numberArray = [];
  for(let i = 0; i <= number; i++){
  numberArray.push(i);
  }
  const beep = numberArray.map(function(digit){
    if(/\d*1\d*/.test(digit)){
      return "Beep!";
    }else if (/\d*2\d*/.test(digit)){
      return "Boop!";
   
    }else{
      return digit;
    }
  })
  return beep;
}