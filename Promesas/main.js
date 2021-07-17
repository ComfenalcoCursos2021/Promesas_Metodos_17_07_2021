const promesa = function({...arg}){
    return new Promise((resolve,reject)=>{

        let tiempo = arg.tiempo();
        setTimeout(() => {
            if(true){
                return resolve(`#${arg.inc} Todo Ok ${arg.id} ${tiempo/1000} Seg`);
            }else{
                return reject(`Todo Mal`);
            }
        }, tiempo);
    })
}

export default promesa;