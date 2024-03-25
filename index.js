const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db'); // Import the database connection function
const blogRoutes = require('./routes/blogRoutes');

// Connect to the database
dbConnect();

// Create an Express app
const app = express();

// Parse JSON bodies middleware
app.use(express.json());

// Mount the blog routes
app.use('/api/v1', blogRoutes);

// Define a basic route for the homepage
app.get('/', (req, res) => {
    res.send('<h1>This Is HomePage Baby</h1>');
});
//hello
// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`The Server is Active at Port ${PORT}`);
});


