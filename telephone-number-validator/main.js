// DESCRIPTIVE
function telephoneCheckDescriptive(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  return regex.test(str);
}

// REFACTORED
const telephoneCheck = str => /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm.test(str);