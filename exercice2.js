let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    let str = String(val);
    if (str === "") str = "(chaine vide)";
    let etat = val ? "truthy" : "falsy";
    console.log(`${str} -> ${etat}`);
}
