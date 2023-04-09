const person={
    name:"pratik"
    ,age:18,
    address:{street:"bb,block b sucess nagar",
    city:"california",
    state:"UP"},
}
 function extractNameandStreet(person){
const {name,address:{street}}=person;
return {name,street};
}
const {name,street}=extractNameandStreet(person);
console.log(name);
console.log(street);