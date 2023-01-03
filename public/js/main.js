// Exo1 
function reverseNumber(n) {
    console.log(n.toString().split('').reverse().join(''));
}

//Exo2
function divPar2(n) {
    switch (n % 2) {
        case 0:
            console.log(`Le num ${n} est divisible par 2 ${n}:2 = ${n/2}`);
            break;
        default:
            console.log(`Ce nombre n'est pas divisible par 2`);
            break;
    }
}

//Exo3
function logIn() {
    let password = prompt("Entrez votre mot de passe :");
    while (password !== "mdp") {
        password = prompt("Mot de passe incorrect. Réessayez :");
    }
    alert("Vous êtes connecté");
}