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

// //UI Logic

function userInput(e){
  e.preventDefault();
  const input = document.querySelector("#input").value;
  const output = beepBoopNeighbor(input); 
  displayArray(output); 
}

function displayArray(resultArray){
  const div = document.querySelector("#resultArray");
  const p = document.createElement("p");
  div.innerHTML = '';
  p.innerText = resultArray.join(", ");
  div.append(p);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", userInput);
})