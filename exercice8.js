let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";


let ageNum = parseInt(age);
let ageValide = (!isNaN(ageNum) && ageNum > 0) ? `${ageNum} (valide)` : `${ageNum} (valeur invalide)`;


let emailValide = (email.includes("@") && email.indexOf(".", email.indexOf("@")) !== -1) ? "valide" : "invalide : pas de point après @";

let scoreNum = parseInt(scoreJeu);
if (isNaN(scoreNum)) scoreNum = 0;

let estAdminBool = (estAdmin === "true") ? true : false;

let derniereConnexionAff = derniereConnexion ?? "Jamais connecté";
let nbConn = parseInt(nombreConnexions);
let nbConnAff = (nbConn === 0) ? "Aucune connexion" : nbConn;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageValide}`);
console.log(`email            : "${email}" (${emailValide})`);
console.log(`scoreJeu         : ${scoreNum} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${derniereConnexionAff}" (valeur par defaut via ??)`);
console.log(`nombreConnexions : "${nbConnAff}" (${nbConn} apres conversion)`);
console.log("================================");
