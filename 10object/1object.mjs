// let info = ["nitan", false, 65];

let info = {
  name: "nitan", //key:value = property
  isMarried: false,
  weight: 65,
};

//object store multiple value with information
console.log(info);
console.log(info.name);
console.log(info.isMarried);
console.log(info.weight);

//change property
info.weight = 61;
console.log(info);

//add property
info.address = "kathmandu";
console.log(info);

//delete property
delete info.weight;
console.log(info);
