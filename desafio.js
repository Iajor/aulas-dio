const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterNivelEExibirMensagem() {
  rl.question("Digite o nome do herói (ou 'sair' para encerrar): ", (nomeDoHeroi) => {
    if (nomeDoHeroi.toLowerCase() === 'sair') {
      rl.close(); 
    } else {
      rl.question("Digite a quantidade de experiência (XP) do herói: ", (xpInput) => {
        const xpDoHeroi = parseFloat(xpInput);

        let nivelDoHeroi;

        if (xpDoHeroi < 1000) {
          nivelDoHeroi = "Ferro";
        } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
          nivelDoHeroi = "Bronze";
        } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
          nivelDoHeroi = "Prata";
        } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
          nivelDoHeroi = "Ouro";
        } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
          nivelDoHeroi = "Platina";
        } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
          nivelDoHeroi = "Ascendente";
        } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
          nivelDoHeroi = "Imortal";
        } else {
          nivelDoHeroi = "Radiante";
        }

        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

        obterNivelEExibirMensagem();
      });
    }
  });
}

obterNivelEExibirMensagem();
