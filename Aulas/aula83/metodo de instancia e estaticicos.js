class ControleRemoto {
  constructor(tv) {
    this.tv= tv;
    this.volume= 0; 
  }
  //Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume -= 2;
  }
  //Método estático
  static trocaPilhas(){
    console.log('Ok, vou trocar.')

  }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
ControleRemoto.trocaPilhas()
console.log(controle1)