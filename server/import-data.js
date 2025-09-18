import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PlaceholderModal from './models/post.model.js';
import connectWithMongoDB from './db/Connection1.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and map the JSON data from program_data_mongo.json
const jsonFilePath = path.join(__dirname, '../program_data_mongo.json');
const rawData = fs.readFileSync(jsonFilePath, 'utf8');
const jsonData = JSON.parse(rawData);

// Use the specific Google Drive image provided by user
// Make sure this image is publicly shared in Google Drive
const googleDriveImageUrl = 'https://drive.google.com/uc?id=17i5j67eaiPkpOOAwcX-xwOav2VWJ97b1';

// Google Drive image IDs - replace with actual FILE_IDs from your shared images
// Example: '1ABC123def456ghi789' (the ID from sharing link)
// const driveImageIds = [
//   'YOUR_FILE_ID_1',
//   'YOUR_FILE_ID_2',
//   // ... etc
// ];

// Transform the JSON data to match the database schema
const yourData = jsonData.map((item, index) => ({
  name: item['File Name '] || '',
  category: 'python', // Set category to python for these turtle graphics programs
  type: item['File type '] || 'python file',
  description: item['page description '] || '',
  shortDescription: item['short description '] || '',
  previewLink: item['preview link'] || '',
  outputImgLink: item['Img link '] || '', // Use img link as output img
  imgLink: googleDriveImageUrl, // Use the specific Google Drive image for all placeholders
  downloadLink: item['download link'] || ''
}));

const importData = async () => {
  try {
    // Connect to MongoDB
    await connectWithMongoDB();
    console.log('✅ Connected to MongoDB');

    // Check current data count
    const currentCount = await PlaceholderModal.countDocuments();
    console.log(`📊 Current documents in database: ${currentCount}`);

    // Clear existing data
    await PlaceholderModal.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Insert your data
    if (yourData.length > 0) {
      const insertedData = await PlaceholderModal.insertMany(yourData);
      console.log(`✅ Successfully inserted ${insertedData.length} documents`);

      // Show sample of inserted data
      const sample = await PlaceholderModal.findOne().select('name imgLink').limit(1);
      console.log('📝 Sample inserted document:', sample);
    } else {
      console.log('⚠️  No data to import. Please add your data to the yourData array.');
    }

    // Show final count
    const finalCount = await PlaceholderModal.countDocuments();
    console.log(`📊 Final documents in database: ${finalCount}`);

    // Close connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');

  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

// Instructions
console.log(`
🚀 DATA IMPORT INSTRUCTIONS
============================

1. Replace the 'yourData' array above with your actual template data
2. Each template should have these required fields:
   - name (string)
   - category (string)
   - type (string)
   - description (string)
   - shortDescription (string)
   - previewLink (string)
   - outputImgLink (string)
   - imgLink (string)
   - downloadLink (string)

3. Run this script: node import-data.js
4. Check your localhost:3001 to see the data

Example template format:
{
  name: "Business Card Template",
  category: "business",
  type: "PSD",
  description: "Professional business card design",
  shortDescription: "Clean business card",
  previewLink: "https://example.com/preview",
  outputImgLink: "https://example.com/output.jpg",
  imgLink: "https://example.com/thumb.jpg",
  downloadLink: "https://example.com/download.zip"
}

Starting import process...
`);

importData();