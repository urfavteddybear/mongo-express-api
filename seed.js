const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/book');
const Category = require('./models/category');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

async function seed() {
  try {
    // Remove all existing data
    await Category.deleteMany();
    await Book.deleteMany();

    // Create 5 categories
    const categories = [];
    for (let i = 1; i <= 5; i++) {
      const category = new Category({
        name: `Category ${i}`,
        description: `Description for Category ${i}`
      });
      await category.save();
      categories.push(category._id);
    }

    // Create 500 books
    for (let i = 1; i <= 500; i++) {
      const book = new Book({
        title: `Book ${i}`,
        author: `Author ${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        publishedYear: 2000 + (i % 20)
      });
      await book.save();
    }

    console.log('Seeding completed');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();
