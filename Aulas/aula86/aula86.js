function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min); 
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, tempo);
  });

}