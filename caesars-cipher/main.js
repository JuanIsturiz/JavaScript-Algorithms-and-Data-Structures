// DESCRIPTIVE
function rot13Descriptive(str) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let translated = "";
  for (let i = 0; i < str.length; i++) {
    let index = abc.indexOf(str[i]);
    let sum = index + 13;
    if (index === -1) {
      translated += str[i];
    }
    if (sum > abc.length - 1) {
      sum = 13 - (abc.length - index);
      translated += abc[sum];
      console.log(sum)
    } else if (index !== -1) {
      translated += abc[sum];
      console.log(abc[sum])
    }
    console.log(index)
    console.log(sum);
    console.log(str[i]);
    console.log(abc[sum])
  }
  console.log(translated)
  return str;
}

// REFACTORED
const rot13 = str => {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let translated = "";
  for (let i = 0; i < str.length; i++) {
    if (abc.indexOf(str[i]) === -1) {
      translated += str[i];
    }
    if (abc.indexOf(str[i]) + 13 > abc.length - 1) {
      translated += abc[13 - (abc.length - abc.indexOf(str[i]))];
    } else if (abc.indexOf(str[i]) !== -1) {
      translated += abc[abc.indexOf(str[i]) + 13];
    }
  }
  return translated;
}