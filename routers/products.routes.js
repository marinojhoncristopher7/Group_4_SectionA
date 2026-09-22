const express=require('express');
const router=express.Router();

let products = [
{id : 1,name:"laptop",price: 50000, stock:10},
{id : 2,name:"phone",price: 50000, stock:25}
];

//GET all products(with query filter)
router.get('/',(req,res) => {
    let result = products;
    if (req.query.name){
        result=result.filter(p=>
p.name.toLowercase().includes(req.query.name.toLowercase()));
} });

//GET products by ID
router.get('/:id',(req,res)=>{
const product=products.find(p=>p.id==req.params.id);
if(!product)return res.status(404).json({success:false,error:{code: "NOT_FOUND", Message:"Product not found"}});

res.status(200).json ({success:true,data:product,meta:{timestamp:newDate().toISOSrtring(),count1}}) });

//POST new product
router.post('/',(req,res) => {
const{name,price,stock}=req.body;
if(!name||!price||!stock)return res.status(400).json({success:false,erro},{code:"BAD.REQUEST",message:"name,price and stock are required"});
});

const newProduct={id:products.lenght+1,name,price,stock};
products.push(newProduct);
res.status(201).json({success:true,data:newProduct,meta:{timestamp:newDate().toISOtring(),count:1}});

//DELETE product by ID
router.delete('/.id',(req,res)=>{
const index=products.findIndex(p=>p.id==req.params.id);
if(index===-1)return res.status(404).json({success:false,error:{code:"NOT_FOUND",
Message:"Producers not found"}});
products.splice(index,1);
res.status(204).send();
});

module.exports=router
