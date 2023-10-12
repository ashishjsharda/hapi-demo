const Hapi=require('hapi')
const server=new Hapi.Server(
    {
        host:'localhost',
        port:8000
    }
);
server.route({
    method:'GET',
    path:'/',
    handler:(request,h)=>{
        return 'Hello World';
    }
});

const start=async()=>{
    try{
        await server.start();
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:',server.info.uri);
}


