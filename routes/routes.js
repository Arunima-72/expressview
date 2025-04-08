const express=require('express');
const router=express.Router();//Router level middleware
router.use(express.json())
router.use(express.urlencoded({extended:true}))
//sample dataset
const data=[{"name":"Anu","age":22,"place":"Kollam"},
    {"name":"Ammu","age":23,"place":"Kochi"},
    {"name":"Archa","age":24,"place":"Kollam"}
        ]
router.get('/',(req,res)=>{
    res.render("home",{
       title:"My page" ,
       my_name:"Anu",
       data
    })
    
})

    router.get('/addform',(req,res)=>{
        //res.send(data);
        res.render("studentform");
})
router.post('/add',(req ,res)=>{
//console.log(req.body)
data.push(req.body);
res.redirect('/basic');
})
router.put('/edit/:id',(req ,res)=>{
    const idno=req.params.id;
    data.splice(idno,1,req.body);
    res.send(data);
})
router.delete('/remove/:id',(req,res)=>{
    data.splice(req.params.id,1);
    res.send(data);
})









module.exports=router