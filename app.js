console.log("ciao");

//Import names.js function
const getFullName = require("./names");
console.log(getFullName);

//Import hobbies.js function
const getHobbies = require("./hobbies");
console.log(getHobbies)

//Crea una funzione che non ha parametri.La funzione dovrebbe restituire un oggetto con due proprietà: fullName e hobbies. 
//All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

function personProfile () {
 const person = {
 fullName: getFullName("anna", "urbani"),
 hobbies: getHobbies("cook","sing","dance")
 }
 return person
}

console.log(personProfile());



