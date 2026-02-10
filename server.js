import expresss from 'express';

const app=expresss();
const port=3000 //localhost:3000

app.get('/',(req,res)=>{
    console.log('olá');
})

app.listen(port,()=>{
    console.log('teste')
})