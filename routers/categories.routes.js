const express = require ('express');
const router = express.Router();

let categories = [
{id:1, name: "Electronics"},
{id:2, name: "Appliances"},
{id:3, name: "Clothing"}
];

//Get all categories (with query filter)
router.get ('/', (req,res) => {
let result = categories;
if (req.query.name){
result = result.filter(c =>
c.name.toLowerCase().includes(req.query.name.toLowerCase())
);
}
res.status (200).json({success:true,data:result,meta:{
timestamp:new Date().tolSOString(),count:result.lenght}});
});

//Get category ID
router.get('/:id', (req, res) => {
    const category = categories.find (c => c.id == req.params.id);
    if(!category) return res.status (404).json ({success:false, error:
        { code: "NOT_FOUND", message: 
            "Category not Found"}});
        res.status (200).js ({succcess:true,data: category,meta:{
            timestamp: new Date().tolSOString(),count:1}});
        });

//Post new category
router.post ('/', (req,res) => {
    const {name} =req.body;
    if(!name) return res.status (400).json ({success:false, error:
        { code: "BAD_REQUEST", message: "Name is required"}});
        const category = {id:categories.length +1, name};
        categories.push(newCategory);
        res.status (201).js ({succcess:true,data: category,meta:{
            timestamp: new Date().tolSOString(),count:1}});
        });

//Delete category by ID
router.delete ('/', (req,res) => {
    const index = categories.findIndex(c => c.id == req.params.id);
    if (index === -1) return res.status (404).json({success:false,
        error: {code:"NOT_FOUND", message: "Category not found"
        }
    });
    categories.splice (index,1);
    res.status (204).send();
});

module.exports = router;


    


