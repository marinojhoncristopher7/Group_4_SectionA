// Package imports
const express = require('express')

const app = express()

app.use('/api/reviews', require('./routes/reviews.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/categories', require('./routes/categories.routes'))

app.use((req, res) => {
    res.status(404).json({
        successful: false, error: {
            code: "NOT FOUND", message : "The requested endpoint does not exist in this server"}
        
    });
});

app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
});