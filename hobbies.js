// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
//La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

function getHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    const hobbiesArray = [];
    hobbiesArray.push(hobbyOne, hobbyTwo, hobbyThree)
    return {
        hobbies: hobbiesArray
    }
}

// scrivo direttamente cosi:
// return {
//     hobbies: [hobbyOne, hobbyTwo, hobbyThree]
// }

console.log(getHobbies("travel", "walk","cook"));

module.exports= getHobbies;


