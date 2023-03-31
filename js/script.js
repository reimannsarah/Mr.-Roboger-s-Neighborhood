//Business logic

function beepBoopNeighbor(number){
  let numberArray = [];
  for(let i = 0; i <= number; i++){
  numberArray.push(i);
  }
  const beep = numberArray.map(function(digit){
    if (digit === 1){
        if(digit>9){
          let digitArray = digit.toString().split("").map(Number);
          console.log(digitArray);
        }

      return "Beep!";
    }else{
      return digit;
    };
  });
  console.log(beep)
}