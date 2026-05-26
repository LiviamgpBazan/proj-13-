let nomes = []

for (let i = 0; i < 7; i++) {
    nomes[i] = prompt("Digite um nome:")
}

console.log("Nomes na ordem inversa:")

for (let i = 6; i >= 0; i--) {
    console.log(nomes[i])
}