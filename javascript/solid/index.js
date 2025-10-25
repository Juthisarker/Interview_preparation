let original = {
  name: "juthi",
  age: 34,
  address: {
    city: "dhaka",
  },
};

let copy = {
  ...original,
  name: "aka",
address :{
    ...original.address,
    city: "madaripur"
}

};
console.log(original);
console.log(copy);
