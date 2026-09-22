const express = require ('express')

const router = express.Router();

let reviews = [
    {id:1, name: "Good reviews",},
    {id:2, name: "Bad reviews"}
];

router.get('/', (req,res) => {
    let results = reviews;
    if (req.query.name){
        result = result.filter (
            c => c.name.toLowerCase().includes(req.query.name.toLowerCase()) ); }
            res.status (200).json({success: true, data: result, meta: {
                timestamp: new Date().tolSOString(), count:result.length}});
            });

router.get('/:id',( req, res) => {
    const {name} = req.body; 
    if(!name) return res.status (404).json ({success: true, error:  {
        code: "BAD_REQUEST", message: "Name is required"  
    }
});
    const reviews = {id:reviews.length +1, name};
    reviews.push(newReview);
    res.status (201).json ({success: true, data: category,meta:{
        timestamp: new Date ().tolSOString, count:1
    } 
})
}
);

router.post('/', (req, res) => {
    const {name} = req.body; 
     if(!name) return res.status(400).json({success: false, error: {
        code: "BAD_REQUEST", message: "Name is required" }});
        const reviews = {id:reviews.length +1, name};
        reviews.push(newReview);
        res.status(201).json ({success: true, data: newReview, meta:{
            timestamp:new Date().tolSOString(), count:1
        }});
    }
)

router.delete('/:id', (req,res) => {
    const index = reviews.findIndex(c => c.id == req.params.id);
    if (index === -1) return res.status (404).json({success:false,
        error:{code: "NOT_FOUND", message: "Category not found"
        }});
        categories.splice(index,1);
        res.status(204).send();
    });

    modules.exports = router;
