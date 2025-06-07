class DispositivoEletro{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
    }

    ligar() {
      if(this.ligado) {
        console.log(this.nome + 'Já ligado');
        return;
      }
      this.ligado = true;

    }

    desligar() {
      if(!this.ligado) {
        console.log(this.nome + 'Já desligado');
        return;
      }
      this.ligado = false;
    }
}

class Smartphone extends DispositivoEletro {
  constructor(nome,cor, modelo) {
    super(nome)
    this.cor= cor;
    this.modelo = modelo;

  }
}

class Tablet extends DispositivoEletro {
  constructor(nome, chip) {
    super(nome);
    this.chip = chip;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.')
  }
}
const s1 = new Smartphone('Samsung', 'Cinza', 'S24 Ultra');
console.log(s1)

const t1 = new Tablet('Xiaomi', true);
t1.ligar()
console.log(t1)