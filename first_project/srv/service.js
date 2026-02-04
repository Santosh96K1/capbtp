const cds = require('@sap/cds');
module.exports = cds.service.impl(async function (srv) {
    srv.on('printhelloworld' , req =>{
    
        const a = req.data.input
          console.log(req.data.input+ 'world');   // print the req data  comming from server
        return a + 'world'
    })
    
})