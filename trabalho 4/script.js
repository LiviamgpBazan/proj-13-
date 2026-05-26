let vetor1 = []
let vetor2 = []
let intersecao = []
let encontrou

console.log("Digite os valores do vetor 1")

for (let i = 0; i < 5; i++) {
    vetor1[i] = parseInt(prompt("Valor:"))
}

console.log("Digite os valores do vetor 2")

for (let i = 0; i < 5; i++) {
    vetor2[i] = parseInt(prompt("Valor:"))
}

let posicao = 0

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

        if (vetor1[i] == vetor2[j]) {

            encontrou = false

            for (let k = 0; k < posicao; k++) {
                if (intersecao[k] == vetor1[i]) {
                    encontrou = true
                }
            }

            if (encontrou == false) {
                intersecao[posicao] = vetor1[i]
                posicao++
            }
        }
    }
}

console.log("Interseção dos vetores:")

for (let i = 0; i < posicao; i++) {
    console.log(intersecao[i])
}