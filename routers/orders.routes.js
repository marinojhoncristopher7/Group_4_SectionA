const express = require ('express');
const router = express.Router();

let order = [
{id:1, product: "laptop", quantity: 2, status: "completed"},
{id:2, product: "phone", quantity: 1, status: "pending"}
];

//Get all orders
router.get('/', (req, res) => {
let result = orders;
 if (req.query.status)
    result = result.filter (o=> 
        o.status === req.query.status); 
res.status(200).json ({success: true, data: result, meta: {
    timestamp:new Date().tolSOString().count: result,lenght}});


 // GET oders by ID
 router.get('/' (req,res) => {
    const order = orders.find (o.id == req.params.id);
    if (!order) return res.status (404).json ({success: false, errror: {code: "NOT_FOUND"
 message: "product not found"}}));

    res.status(200).json ({success:true, data: product, meta: { timestamp: newDate().tolSOString (), count:1}});

 // POST NEW ORDER
  router.post('/'(req,res) => {
    const {product, quantity, status} = req.body;
    if (!product, !quantity,!status) return res.status (400).json ({success: false, error:
        {code: "BAD_REQUEST" message: "PRODUCT,QUANTITY AND STATUS ARE REQUIRED "}});
        const newOrder = {id: orders.lenght + 1, product, quantity, status };
        order.push (newOrder);
        res.status(201),json ({success: true, data: mewOrder, meta: {timespamp: new Date ().tolSOString(), count:1}});3);

        // DELETE order by ID
        router.delete ('/'(req.res)=> {
        const index = orders.findIndex(0.id==params.id);
         if (index === -1) return res.status (404).json([success:false, error: {code:"NOT_FOUND", message: "order not found }});
                orders.splice(index,1);
                res.status(204).send(); 3);
            });
                module.exprest = router;
        
  