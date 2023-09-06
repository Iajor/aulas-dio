const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function informarNomeENivel() {
  rl.question("Informe o nome do herói (ou 'sair' para terminar): ", (nomeDoHeroi) => {
    if (nomeDoHeroi.toLowerCase() === 'sair') {
      rl.close(); 
    } else {
      rl.question("Informe a quantidade de experiência do herói: ", (expInput) => {
        const expDoHeroi = parseFloat(expInput);

        let nivelDoHeroi;

        if (expDoHeroi < 1000) {
          nivelDoHeroi = "Ferro";
        } else if (expDoHeroi >= 1001 && expDoHeroi <= 2000) {
          nivelDoHeroi = "Bronze";
        } else if (expDoHeroi >= 2001 && expDoHeroi <= 5000) {
          nivelDoHeroi = "Prata";
        } else if (expDoHeroi >= 6001 && expDoHeroi <= 7000) {
          nivelDoHeroi = "Ouro";
        } else if (expDoHeroi >= 7001 && expDoHeroi <= 8000) {
          nivelDoHeroi = "Platina";
        } else if (expDoHeroi >= 8001 && expDoHeroi <= 9000) {
          nivelDoHeroi = "Ascendente";
        } else if (expDoHeroi >= 9001 && expDoHeroi <= 10000) {
          nivelDoHeroi = "Imortal";
        } else {
          nivelDoHeroi = "Radiante";
        }

        console.log(`O Herói ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);

        informarNomeENivel();
      });
    }
  });
}

informarNomeENivel();
