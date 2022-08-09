// DESCRIPTIVE
function palindromeDescriptive(str) {
  const regex = /[a-z0-9]/
  console.log(regex.test(str));
  let lowered = str.toLowerCase();
  let splitted = lowered.split('');
  let purged = [];
  console.log(splitted);
  let test = splitted.map(el => regex.test(el));
  console.log(test);
  splitted.forEach(element => {
    if (regex.test(element) === true) purged.push(element)
  });
  let purgedAndJoined = purged.join('')
  console.log(purged)
  let reversed = purged.reverse();
  let joined = reversed.join('');
  console.log(purgedAndJoined);
  console.log(joined);

  if (purgedAndJoined === joined) {
    return true;
  } else {
    return false;
  }
}

//REFACTORED
const palindrome = str => {
  let loweredAndSplited = str.toLowerCase().split('');
  let purged = [];
  loweredAndSplited.forEach(element => {
    if (/[a-z0-9]/.test(element)) purged.push(element)
  });
  let purgedAndJoined = purged.join('');
  let reversedAndJoined = purged.reverse().join('');
  return purgedAndJoined === reversedAndJoined;
}