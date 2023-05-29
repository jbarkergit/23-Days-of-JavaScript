//1:1
function wrapper() {
  let firstName = "John";
  let lastName = "Doe";
  function element() {
    return firstName + " " + lastName;
  }

  return {
    element: element(),
  };
}

// console.log(wrapper().element);

//2:1
function counter() {
  let count = 0;

  function initCount() {
    return count;
  }

  function add() {
    count++;
    return count;
  }

  function subtract() {
    count--;
    return count;
  }

  return {
    initCount: initCount(),
    add: add(),
    subtract: subtract(),
  };
}

// counter();
// console.log(counter().initCount);
// console.log(counter().add);
// console.log(counter().subtract);

//3:1
function personAccount() {
  let firstName = "John";
  let lastName = "Doe";
  let incomes = [2300, 700, 300];
  let expenses = [78, 65, 153, 94, 1489];
  let totalIncome = 0;
  let totalExpenses = 0;

  function getName() {
    return firstName + " " + lastName;
  }
  function getIncome() {
    incomes.forEach((income) => (totalIncome += income));
    return totalIncome;
  }

  function getExpenses() {
    expenses.forEach((expense) => (totalExpenses += expense));
    return totalExpenses;
  }

  function getDisposibleIncome() {
    return getIncome() - getExpenses();
  }

  return {
    getName: getName(),
    getIncome: getIncome(),
    getExpenses: getExpenses(),
    getDisposibleIncome: getDisposibleIncome(),
  };
}

console.log(personAccount().getName);
console.log(personAccount().getIncome);
console.log(personAccount().getExpenses);
console.log(personAccount().getDisposibleIncome);
