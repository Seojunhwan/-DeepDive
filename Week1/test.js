console.log(dec(2, 3)); // 5
console.log(exp(2, 3)); // ReferenceError: exp is not defined
console.log(arrow(2, 3));
console.log(arrow2(2, 3));

function dec(num1, num2) {
  return num1 + num2;
}

const exp = function (num1, num2) {
  return num1 + num2;
};

let arrow2 = (num1, num2) => {
  return num1 + num2;
};

var arrow = (num1, num2) => {
  return num1 + num2;
};