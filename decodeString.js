// Write your code below this line

function decodeString(sequence) {
  let arr = [];
  let result = "";
  num = parseInt(sequence[0]);
  for (let i = 1; i < sequence.length; i++) {
    arr.push(String.fromCharCode(sequence[i].charCodeAt() + num));    
  }
  result = arr.toString().replaceAll(`,`, ``);

  return result;
}

console.log(decodeString("3ce"));
