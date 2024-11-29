//Crea una funzione che accetta due parametri: firstName, lastName. 
//La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function getFullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName    
};

}

console.log(getFullName("Anna","Urbani"));


// Export module

module.exports = getFullName;


 