let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
let sousTotalAff = sousTotal.toFixed(3);
console.log(`Sous-total: ${sousTotalAff} MAD`);

let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage ?? 0) / 100 : 0;
let reductionAff = reduction.toFixed(3);
console.log(`Réduction : ${reductionAff} MAS`);

let total = sousTotal - reduction;
let totalAff = total.toFixed(3);
console.log(`Total     : ${totalAff} MAS`);

let statut = soldeCompte >= total ? "Paiement accepté" : "Solde insuffisant";
console.log(`Statut    : ${statut}`);

let nouveauSolde = soldeCompte >= total ? soldeCompte - total : soldeCompte;
let nouveauSoldeAff = nouveauSolde.toFixed(3);
if (statut === "Paiement accepté") {
  console.log(`Solde     : ${nouveauSoldeAff} MAD`);
}

console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotalAff} MAD`);
console.log(`Réduction : ${reductionAff} MAS`);
console.log(`Total     : ${totalAff} MAS`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSoldeAff} MAD`);
console.log("=========================");
