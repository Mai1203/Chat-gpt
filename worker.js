import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm"

const handler = new WebWorkerMLCEngineHandler()

self.onmessage = (msg) => {
  handler.onmessage(msg)
}
// onmessage = (e) => {
//   console.log("Worker: Mensaje recibido");
//   console.log(e);
//   if(e.data.name === 'hello'){
//     console.log("enviando mensaje");
//     postMessage({ name: 'hello from back'})
//   }
// }