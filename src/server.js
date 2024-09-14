const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const bookRoutes = require('./src/routes/books');
const categoryRoutes = require('./src/routes/categories');

const app = express();

// Logging middleware
app.use((req, res, next) => {
    const now = new Date();
    const logMessage = `${now.toISOString()} - ${req.method} ${req.originalUrl}`;
    console.log(logMessage);
    next(); // Proceed to the next middleware or route handler
});

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define IP and port
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0'; // Specify the IP address

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
