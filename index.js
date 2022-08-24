const func = () => {
  console.log(this.x);
};

func.call({ x: 1 });
