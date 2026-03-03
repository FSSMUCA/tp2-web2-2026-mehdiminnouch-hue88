let pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let diffCount = 0;

for (let i = 0; i < pairs.length; i++) {
  let [a, b] = pairs[i];
  let eq = a == b;
  let seq = a === b;
  let aStr = typeof a === "string" ? `"${a}"` : String(a);
  let bStr = typeof b === "string" ? `"${b}"` : String(b);

  if (a === " \t\n ") aStr = '" \\t\\n "';
  if (b === " \t\n ") bStr = '" \\t\\n "';

  if (typeof a === "number" && isNaN(a)) aStr = "NaN";
  if (typeof b === "number" && isNaN(b)) bStr = "NaN";

  let line = `${aStr} == ${bStr}`.padEnd(16) + `-> ${eq}`.padEnd(10) + `|   ${aStr} === ${bStr}`.padEnd(20) + `-> ${seq}`;
  console.log(line);
  if (eq && !seq) diffCount++;
}
console.log("---");
console.log(`${diffCount} paire(s) ou == et === donnent des résultats différents`);
