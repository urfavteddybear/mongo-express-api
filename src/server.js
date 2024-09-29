const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

dotenv.config();

const bookRoutes = require('./routes/books');
const categoryRoutes = require('./routes/categories');

const app = express();

// Logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' });
app.use(morgan(':date[iso] - :remote-addr - :method :url :status :response-time ms', { stream: accessLogStream })); // Log to file
app.use(morgan(':date[iso] - :remote-addr - :method :url :status :response-time ms')); // Log to console as well
app.set('trust proxy', true);

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
