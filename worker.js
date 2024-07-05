onmessage = (e) => {
  console.log("Worker: Mensaje recibido");
  console.log(e);
  if(e.data.name === 'hello'){
    console.log("enviando mensaje");
    postMessage({ name: 'hello from back'})
  }
}