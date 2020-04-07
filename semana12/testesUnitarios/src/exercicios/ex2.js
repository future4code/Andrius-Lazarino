export function checaPalindromo(frase) {
  let fraseInvertida = frase.replace(/-/g, "").replace(/ /g, "");
  console.log(fraseInvertida);
  console.log(
    fraseInvertida
      .split("")
      .reverse()
      .join("")
  );
  if (
    fraseInvertida
      .split("")
      .reverse()
      .join("") === fraseInvertida
  ) {
    return true;
  } else {
    return false;
  }
}
