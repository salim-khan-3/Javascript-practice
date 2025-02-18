const nameArr = [`jannatun akter`,`fahim`,`mst sonia akter`,`md salim islam`]

const DeleteValue = nameArr.splice(1,2);

console.log(`New Array: ${nameArr}`);
console.log(`show me deleted values: ${DeleteValue}`);
console.log(`value deleted numbers: ${DeleteValue.length}`);