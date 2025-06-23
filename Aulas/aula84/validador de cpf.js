class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    return cpfSemDigitos + digito1 + digito2;
  }

  geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for (let stringNumerica of cpfParcial) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.éSequência()) return false;

    const cpfGerado = this.geraNovoCpf();
    return cpfGerado === this.cpfLimpo;
  }
}

const cpf1 = new ValidaCPF('070.987.720-03');
console.log(cpf1.valida() ? 'CPF Válido' : 'CPF Inválido');

const cpf2 = new ValidaCPF('705.484.450-52');
console.log(cpf2.valida() ? 'CPF Válido' : 'CPF Inválido');
