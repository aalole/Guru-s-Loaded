const myObj = {100: "a", 2: "b", 7: "c"};
console.log (Object.keys(myObj));

const obj2 = {a:1, b:2, c:3};
const returnObj2Value = (obj)=>{
  for (let prop in obj2) {}
  alert (`Obj2.${prop} = ${obj2 [prop]}`);
}

for (const prop in obj2){
  alert (`Obj2.${prop} = ${obj2 [prop]}`);
}
  
const triangle = {a: 1, b: 2, c: 3};
const colouredTriangle = () => {
  this.color = "red";
}
colouredTriangle.prototype = triangle;
let obj = new colouredTriangle;
for(let prop in obj) {
  if (obj.hasOwnProperty(prop)){
    alert(obj[prop]); 
  }
}