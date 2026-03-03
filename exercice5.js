let nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0
];

for (let i = 0; i < nombres.length; i++) {
  let n = nombres[i];
  let res = '';
  if (Number.isNaN(n)) {
    res = 'INVALIDE';
  } else if (n === Infinity || n === -Infinity) {
    res = 'INFINI';
  } else if (1 / n === -Infinity) {
    res = 'ZERO NEGATIF';
  } else if (Number.isInteger(n)) {
    if (Math.abs(n) <= Number.MAX_SAFE_INTEGER) {
      res = 'ENTIER SUR';
    } else {
      res = 'ENTIER HORS LIMITES';
    }
  } else {
    res = 'DECIMAL';
  }
  console.log(`${n} -> ${res}`);
}
