function runCode() {
    const code = document.getElementById("code").value;
    const outputElement = document.getElementById("output");

    try {
        const result = eval(code);
        outputElement.innerHTML = `<div class="success">Área del triángulo: ${result}</div>`;
    } catch (error) {
        outputElement.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

document.getElementById("code").value = `
const base = prompt("Ingresa la base del triángulo:");
const altura = prompt("Ingresa la altura del triángulo:");

const area = 0.5 * base * altura;
area;
`;
