/* eslint-disable no-undef */
 const express=require('express');
 const app=express();
 const cors=require('cors');
 app.use(cors());
 app.use(express.urlencoded({extended:true}))
 app.use(express.static('.'))

app.get('/',(req,res)=>{
    res.sendFile('./index.html')
})
app.get('/products',(req,res)=>{
    res.sendFile('./products.js')
});


 app.listen(6060,()=>{console.log('Server started at port:6060')})