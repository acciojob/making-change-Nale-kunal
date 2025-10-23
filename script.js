const makeChange = (c) => {
  // calculate quarters
  let q = Math.floor(c / 25);
  c = c % 25;

  // calculate dimes
  let d = Math.floor(c / 10);
  c = c % 10;

  // calculate nickels
  let n = Math.floor(c / 5);
  c = c % 5;

  // remaining pennies
  let p = c;

  // return result as an object
  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
