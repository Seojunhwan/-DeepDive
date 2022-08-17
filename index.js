const add = (value) => {
  return value + 1;
};

const func = { add };

func.add();

const arr = [1, 2, 3];

console.log(arr.map(func.add));
