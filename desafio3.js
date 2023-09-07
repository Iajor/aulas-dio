class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  

  const heroi1 = new Heroi("Trevor", 25, "mago");
  const heroi2 = new Heroi("Naruto", 18, "ninja");
  const heroi3 = new Heroi("Edward", 40, "monge");
  const heroi4 = new Heroi("Artur", 27, "guerreiro");
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  