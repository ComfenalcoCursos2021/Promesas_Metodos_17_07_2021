import promesa from './Promesas/main.js';
import getNumero from './Metodos/Tiempo.js';
import {tags} from './Metodos/Identificacion.js';

addEventListener('DOMContentLoaded', function(e){

    let data = {
        id: 'Archivo app.js ejecutando promesa...',
        tiempo(){
            return getNumero();
        }
    }


    // Promise.allSettled([promesa(tags.getCondicion(data))])
    // .then((res)=>{
    //     if(res[0]["status"]!="fulfilled"){
    //         console.log(res[0].reason);
    //         return res;
    //     }
    // }).then((res)=>{
    //     Promise.allSettled([promesa(tags.getCondicion(data))])
    //     .then((res)=>{
    //         if(res[0]["status"]!="fulfilled"){
    //             console.log(res[0].reason);
    //             return res;
    //         }
    //     })
    // }).then((res)=>{
    //     Promise.allSettled([promesa(tags.getCondicion(data))])
    //     .then((res)=>{
    //         if(res[0]["status"]!="fulfilled"){
    //             console.log(res[0].reason);
    //             return res;
    //         }
    //     })
    // })


    // Promise.all([promesa(tags.getCondicion(data)),promesa(tags.getCondicion(data)),promesa(tags.getCondicion(data))])
    // .then((res)=>{
    //     console.log(res);
    // }).catch((res)=>{
    //     console.log(res);
    // })
    
    
    // promesa(tags.getCondicion(data))
    // .then((res)=>{
    //     console.log(res);
    // }).catch((res)=>{
    //     console.log(res);
    // })
    // promesa(tags.getCondicion(data))
    // .then((res)=>{
    //     console.log(res);
    // }).catch((res)=>{
    //     console.log(res);
    // })
    // promesa(tags.getCondicion(data))
    // .then((res)=>{
    //     console.log(res);
    // }).catch((res)=>{
    //     console.log(res);
    // })


})

