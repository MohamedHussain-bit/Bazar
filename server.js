const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', categoryRoutes);

// Validate MongoDB connection string early and give a clear error if missing
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('❌ Missing MONGO_URI environment variable.\nCreate a .env file with: MONGO_URI=your_connection_string');
  // Exit with non-zero code so process managers know it failed to start
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
