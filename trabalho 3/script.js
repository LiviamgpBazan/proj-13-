let nomes = []
let idades = []

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite o nome:")
    idades[i] = parseInt(prompt("Digite a idade:"))
}

console.log("Pessoas menores de idade:")

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log("Nome:", nomes[i])
        console.log("Idade:", idades[i])
    }
}