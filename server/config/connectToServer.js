
const connectToServer = (app,port)=>{
    const server =  app.listen(port,(err)=>{
        if(!err){
            console.log(`Server has been connected successfUlly on port: ${port} `.green.bgBlack)
        }
        else{
            console.log(`Error occurred : ${err.message}`.bgWhite.red)
        }
    })
    return server;
}

export default connectToServer;