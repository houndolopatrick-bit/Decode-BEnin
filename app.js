const APPLE = 950;
console.log("Jésus bois de l'eau ");
console.log("hello word");
let nom = 'Tom';
let prenom = 'Patrick';


function bonjour(nom , prenom ){ // javascript n'accepte pas la déclaration de variable nom : String par exemple
    let salutation = `Bonjour monsieur ${nom} ${prenom}`
    console.log(salutation)
}

bonjour(nom = "Houndolo", prenom = "Patrick") // Chaines de caractères et tu mets sans double cote 

let role  = 'admin';

switch (role) {
    case 'admin':
        console.log('Je suis un admmin.');
        break; // Most
    case 'entrepreneur' : 
        console.log("Je suis un entrepreneur");
        break;
    case 'client' : 
        console.log('Je suis un client');
        break; // Tout comme le cours sur javascript le disait, sans  break, la vérification continue et finis par renvoyer la valeur par défaut.
    default: 
        console.log("Vous n'avez aucun rôle dans le système") 
    
}

for(let i = 0; i <= 5; i++){
    console.log(i)

}

array = [1, 2, 3, 4, 5]

array.forEach(element => {
    console.log(`Je suis le nombre numéro ${element}`)
});

console.log(array[0])

array.forEach(number => {
    console.log(number + 1);
})

