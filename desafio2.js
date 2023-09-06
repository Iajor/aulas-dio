const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas
  let nivel

  if (saldoVitorias < 10) {
    nivel = "Ferro"
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze"
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata"
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro"
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante"
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário"
  } else {
    nivel = "Imortal"
  }

  return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`
}

function obterInformacoes() {
  rl.question("Digite o número de vitórias: ", (vitorias) => {
    rl.question("Digite o número de derrotas: ", (derrotas) => {
      const resultado = calcularNivel(parseInt(vitorias), parseInt(derrotas))
      console.log(resultado)
      rl.question("Deseja calcular novamente? (sim ou não): ", (resposta) => {
        if (resposta.toLowerCase() === 'sim') {
          obterInformacoes()
        } else {
          rl.close()
        }
      })
    })
  })
}

obterInformacoes()
