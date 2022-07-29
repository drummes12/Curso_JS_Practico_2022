const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

const concatInputs = (event) => {
  event.preventDefault();
  const resultSum = input1.value + input2.value;
  result.innerText = `Resultado: ${resultSum}`;
};

form.addEventListener("submit", concatInputs);
input2.addEventListener("keyup", concatInputs);
