//Business logic

function beepBoopNeighbor(number){
  let numberArray = [];
  for(let i = 0; i <= number; i++){
  numberArray.push(i);
  }
  const beep = numberArray.map(function(digit){
    if (/\d*3\d*/.test(digit)) {
      return "Won't you be my neighbor?"
    } else if (/\d*2\d*/.test(digit)) {
      return "Boop!";
    } else if (/\d*1\d*/.test(digit)) {
      return "Beep!";
    }else {
      return digit;
    }
  })
  return beep;
}