// exercicio : Sua função deve sempre retornar uma promise
// Se data não for um número, devolva uma promessa rejeitada instantaneamente e forneça a mensagem "deu ruim" (em uma string)
// Se data for um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os dados "ímpar" (em uma string)
// Se data for um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os dados "par" (em uma string)
// Dica: quando você codifica uma função que retorna uma promessa, certifique-se de sempre retornar uma promessa. Mesmo se você quiser lidar com um erro, basta retornar uma promessa e rejeitá-la.
// Dica: use isNaN(data) para verificar se os dados não são um número.

// function job(data) {
//     return something;
// }

const retornaPromessa = numero => {
    return new Promise((resolve, reject) => {
        if (isNaN(numero)) {
            reject("deu ruim")

        } else if (numero % 2 == 0) {
            setTimeout(() => {
                resolve("é um numero par")
            }, 1000)
    
        } else {
        setTimeout(() => {
            resolve("é um numero impar")
        }, 2500)
    }
})
}
function job(num) {
    retornaPromessa(num)
        .then((sucesso) => alert(sucesso))
        .catch((erro) => alert(erro))
}
job()
