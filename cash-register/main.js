// DESCRIPTIVE
function checkCashRegisterDescriptive(price, cash, cid) {
  let changeDue = cash * 100 - price * 100;
  const cidBy100 = cid.map(unit => [unit[0], Math.round(unit[1] * 100)]);
  const cidTotal = cid.reduce((acc, el) => acc + el[1] * 100, 0);
  const table = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }
  let insufficient = { status: "INSUFFICIENT_FUNDS", change: [] };
  let closed = { status: "CLOSED", change: cid };
  let open = { status: "OPEN", change: [] }
  if (cidTotal < changeDue) {
    return insufficient;
  } else if (cidTotal === changeDue) {
    return closed;
  } else {
    cidBy100.reverse();
    let newChange = [];
    for (const element in cidBy100) {
      let currentCidUnit = cidBy100[element][1];
      console.log(currentCidUnit);
      let currentTableUnit = table[cidBy100[element][0]];
      console.log(currentTableUnit);
      let current = [cidBy100[element][0], 0]
      while (currentTableUnit <= changeDue && currentCidUnit > 0) {
        currentCidUnit -= currentTableUnit;
        changeDue -= currentTableUnit;
        current[1] += currentTableUnit / 100;
      }
      if (current[1] > 0) newChange.push(current);
    }
    if (changeDue > 0) {
      return insufficient;
    }
    console.log(newChange);
    open.change = newChange;
    return open;
  }
}

//REFACTORED
const checkCashRegister = (price, cash, cid) => {
  let changeDue = cash * 100 - price * 100;
  const cidBy100 = cid.map(unit => [unit[0], Math.round(unit[1] * 100)]).reverse();
  const cidTotal = cidBy100.reduce((acc, el) => acc + el[1], 0);
  const table = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }

  if (cidTotal < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let newChange = [];
    for (const element in cidBy100) {
      let current = [cidBy100[element][0], 0];
      while (table[cidBy100[element][0]] <= changeDue && cidBy100[element][1] > 0) {
        cidBy100[element][1] -= table[cidBy100[element][0]];
        changeDue -= table[cidBy100[element][0]];
        current[1] += table[cidBy100[element][0]] / 100;
      }
      if (current[1] > 0) newChange.push(current);
    }
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: newChange };
  }
}