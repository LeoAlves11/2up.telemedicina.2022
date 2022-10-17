export default class MediaHandler {
    getPermissoes(){
        return new Promise((resolve, rejected) => {
            navigator.mediaDevices.getUserMedia({
                video: true, 
                audio: true
            }).then((stream) => {
            
                resolve(stream);
            
            }).catch(erro => {
                    throw new Error(`Impossível iniciar a transmissão de vídeo: ${erro}`)
            });
        });
    }
}