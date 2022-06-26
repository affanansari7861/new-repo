const os = require(`os`);
// properties of this module 
 const userINfo ={
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freeMem : os.freemem(),
    systemRuntime : os.uptime()
 }
 console.log(userINfo); 