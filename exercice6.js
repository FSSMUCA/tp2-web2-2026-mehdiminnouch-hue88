let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log(`nom ?? "valeur par défaut"    -> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut"    -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut"  -> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut"  -> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut"  -> ${actif ?? "valeur par défaut"}`);

console.log(`nom || "valeur par défaut"     -> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut"     -> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut"   -> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut"   -> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut"   -> ${actif || "valeur par défaut"}`);

function compare(a, b) {
  return a === b ? "même résultat" : "résultat différent";
}

console.log(`nom   : ?? et || -> ${compare(nom ?? "valeur par défaut", nom || "valeur par défaut")}`);
console.log(`age   : ?? et || -> ${compare(age ?? "valeur par défaut", age || "valeur par défaut")}`);
console.log(`ville : ?? et || -> ${compare(ville ?? "valeur par défaut", ville || "valeur par défaut")}`);
console.log(`score : ?? et || -> ${compare(score ?? "valeur par défaut", score || "valeur par défaut")}`);
console.log(`actif : ?? et || -> ${compare(actif ?? "valeur par défaut", actif || "valeur par défaut")}`);
