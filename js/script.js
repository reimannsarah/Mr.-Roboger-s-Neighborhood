//Business logic

function beepBoopNeighbor(number){
  let numberArray = [];
  for(let i = 0; i <= number; i++){
  numberArray.push(i);
  }
  const finalArray = numberArray.map(function(digit){
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
  return finalArray;
}

// //UI Logic

function userInput(e){
  e.preventDefault();
  const input = document.querySelector("#inp").value;
  const output = beepBoopNeighbor(input); 
  displayArray(output); 
}

function displayArray(resultArray){
  const dialog = document.querySelector("#resultCard");
  const p = document.createElement("p");
  dialog.innerHTML = '';
  p.innerText = resultArray.join(", ");
  dialog.append(p);
  dialog.showModal();  
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", userInput);
})
btn.addEventListener("submit", closeModal());