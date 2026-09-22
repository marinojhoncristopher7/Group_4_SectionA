const express = require('express');

const router = express.Route();

let users = [
	{
	id:1,
	name:"Juan",
	roles:"admin"
},

{
	
	id:2,
	name:"Maria",
	roles:"user" 
}

];

router.get('/',(req, res) => {
	res.status(200).json({
	success:true,
	data:users,
	meta:{
	timestamp:new
Date().toISOString(),
count: users.length
}
});
});

router.get('/',(req, res) => {
const{id} = reg.params;
const user = users.find(u => u.id === parseInt(id));
if(!user){
return res.status(404).json({
success:false,
error:{
code:"USER NOT FOUND",
message:"User not found"
}
});
}

res.status(200).json({
success:true,
data:user,
meta:{
timestamp:new Date().toISOString(),
count:1
}
});

});

router.post('/', (req, res) => {
const { name, roles} = req.body;
if(!name || !roles){
return res.status(400).json({
success: false,
error: {
code:"BAD_REQUEST",
message: "Name and roles are required"
}
});
}

const newUser = {
id: user.length + 1,
name,
roles
};

user.push(newUSer);
res.status(201).json({
success: true,
data: newUser,
meta: {
timestamp: new Date().toISOString(),
count: 1
}
});
}); 

router.delete(('/:id'),(req, res) => {
const index = users. findIndex(u => u.id == req.params.id);
if(index === -1){
return res.status(404).json({
success: false,
error:{
code: "NOT_FOUND",
message: "User not found"
}
});
}

users.splice(index, 1);
res.status(204).send();
});

module.exports = router;