const texto = `Gabriel trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

💡

Foi um ano excelente na vida de gabriel. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria:
"Gaaaabrieeeeeel, o café tá prontinho aqui. Veeemm"!`

const arquivos = [
  'Atenção.jpg',
  'FOTO.jpeg',
  'Teste.JPG',
  'Texto.jpg',
  'Lista.JPEG',
  'Compras.png',
  'Tarefas.txt',
];

const cpfs2 = `341.565.570-90
672.483.340-06
527.680.820-15
335.376.370-80
`

const cpfs = `
Os CPFs são:
  849.824.630-00 208.361.830-02 050.480.280-15

  951.463.600-73
`
const ips = `
Os Ips são:

136.38.158.131 2.166.26.83 110.22.250.84

60.74.23.185 
`

const alfabeto =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz @; 0123456789 i';

const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div </div>';
const html2 = `<p class="teste teste" data-teste = 
'teste'>Olá mundo</p> 
<div>Olá de div</div>
`
const lookahead = `ONLINE 192.168.0.1 ABCDEF inactive
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
ONLINE 192.168.0.4 ABCDEF active
OFFLINE 192.168.0.5 ABCDEF active
OFFLINE 192.168.0.6 ABCDEF inactive`

module.exports = { 
  texto,
  arquivos,
  html,
  html2,
  alfabeto,
  cpfs, 
  ips,
  cpfs2,
  lookahead
}