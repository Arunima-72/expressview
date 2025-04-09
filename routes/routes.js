const express=require('express');
const router=express.Router();//Router level middleware
router.use(express.json())
router.use(express.urlencoded({extended:true}))
//sample dataset
const data=[{"name":"Anu","age":22,"place":"Kollam"},
    {"name":"Ammu","age":23,"place":"Kochi"},
    {"name":"Archa","age":24,"place":"Kollam"}
]
  function route(nav){    
router.get('/',(req,res)=>{
    res.render("home",{
       title:"My page" ,
       my_name:"Anu",
       data,
       nav
    })
    
})

    router.get('/addform',(req,res)=>{
        //res.send(data);
        res.render("studentform",{nav})
        
})
router.post('/add',(req ,res)=>{
//console.log(req.body)
data.push(req.body);
res.redirect('/basic');
})
router.post('/edit/:id',(req ,res)=>{
    const idno=req.params.id;
    data.splice(idno,1,req.body);
    // res.send(data);
    res.redirect('/basic');
   
})
router.get('/delete/:id',(req,res)=>{
    data.splice(req.params.id,1);
    res.redirect('/basic');
    
})
router.get('/update/:ind',(req,res)=>{
res.render("updateform",{nav,id:req.params.ind,data});

})

return router

  }



module.exports=route