let waitTest = async ()=>{
    let prom = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("waaaaaaaaaating...");
        },3000);
    });
    let msgRtn = null;
    await prom.then(msg => {        
        msgRtn = msg;
    });
    return msgRtn;
}

module.exports = {waitTest};