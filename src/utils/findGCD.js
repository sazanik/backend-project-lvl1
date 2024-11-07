export default (num1, num2) => {
  let a = num1;
  let b = num2;

  let temp;

  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};
