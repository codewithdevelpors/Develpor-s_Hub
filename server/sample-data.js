import mongoose from 'mongoose';
import PlaceholderModal from './models/post.model.js';
import connectWithMongoDB from './db/Connection1.js';

const sampleData = [
  {
    name: "Modern Business Card Template",
    category: "business",
    type: "PSD",
    description: "A professional business card template with clean design and modern typography. Perfect for corporate branding and networking.",
    shortDescription: "Clean, professional business card design",
    previewLink: "https://example.com/preview/business-card-1",
    outputImgLink: "https://example.com/output/business-card-1.jpg",
    imgLink: "https://example.com/thumbnail/business-card-1.jpg",
    downloadLink: "https://example.com/download/business-card-1.zip"
  },
  {
    name: "Creative Resume Template",
    category: "business",
    type: "DOCX",
    description: "Stand out with this creative resume template featuring infographics and modern layout. Includes multiple color schemes.",
    shortDescription: "Eye-catching resume with infographics",
    previewLink: "https://example.com/preview/resume-1",
    outputImgLink: "https://example.com/output/resume-1.jpg",
    imgLink: "https://example.com/thumbnail/resume-1.jpg",
    downloadLink: "https://example.com/download/resume-1.zip"
  },
  {
    name: "E-commerce Product Catalog",
    category: "business",
    type: "PDF",
    description: "Comprehensive product catalog template for e-commerce businesses. Features product grids and pricing tables.",
    shortDescription: "Professional product catalog design",
    previewLink: "https://example.com/preview/catalog-1",
    outputImgLink: "https://example.com/output/catalog-1.jpg",
    imgLink: "https://example.com/thumbnail/catalog-1.jpg",
    downloadLink: "https://example.com/download/catalog-1.zip"
  },
  {
    name: "Social Media Post Bundle",
    category: "marketing",
    type: "PNG",
    description: "Complete set of social media post templates for Instagram, Facebook, and Twitter. Includes stories and post variations.",
    shortDescription: "Social media graphics bundle",
    previewLink: "https://example.com/preview/social-1",
    outputImgLink: "https://example.com/output/social-1.jpg",
    imgLink: "https://example.com/thumbnail/social-1.jpg",
    downloadLink: "https://example.com/download/social-1.zip"
  },
  {
    name: "Restaurant Menu Design",
    category: "food",
    type: "AI",
    description: "Elegant restaurant menu template with food photography placeholders and professional typography.",
    shortDescription: "Beautiful restaurant menu design",
    previewLink: "https://example.com/preview/menu-1",
    outputImgLink: "https://example.com/output/menu-1.jpg",
    imgLink: "https://example.com/thumbnail/menu-1.jpg",
    downloadLink: "https://example.com/download/menu-1.zip"
  },
  {
    name: "Wedding Invitation Suite",
    category: "events",
    type: "PSD",
    description: "Complete wedding invitation package including save-the-date, invitation, and RSVP cards with elegant design.",
    shortDescription: "Complete wedding invitation set",
    previewLink: "https://example.com/preview/wedding-1",
    outputImgLink: "https://example.com/output/wedding-1.jpg",
    imgLink: "https://example.com/thumbnail/wedding-1.jpg",
    downloadLink: "https://example.com/download/wedding-1.zip"
  },
  {
    name: "Real Estate Flyer Template",
    category: "real-estate",
    type: "IND",
    description: "Professional real estate flyer template with property photo placeholders and agent contact information.",
    shortDescription: "Real estate marketing flyer",
    previewLink: "https://example.com/preview/real-estate-1",
    outputImgLink: "https://example.com/output/real-estate-1.jpg",
    imgLink: "https://example.com/thumbnail/real-estate-1.jpg",
    downloadLink: "https://example.com/download/real-estate-1.zip"
  },
  {
    name: "Fitness Center Brochure",
    category: "health",
    type: "PDF",
    description: "Comprehensive fitness center brochure with membership options, class schedules, and facility photos.",
    shortDescription: "Fitness center marketing brochure",
    previewLink: "https://example.com/preview/fitness-1",
    outputImgLink: "https://example.com/output/fitness-1.jpg",
    imgLink: "https://example.com/thumbnail/fitness-1.jpg",
    downloadLink: "https://example.com/download/fitness-1.zip"
  }
];

const insertSampleData = async () => {
  try {
    // Connect to MongoDB
    await connectWithMongoDB();

    // Clear existing data
    await PlaceholderModal.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample data
    const insertedData = await PlaceholderModal.insertMany(sampleData);
    console.log(`Successfully inserted ${insertedData.length} sample documents`);

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');

  } catch (error) {
    console.error('Error inserting sample data:', error);
    process.exit(1);
  }
};

// Run the script
insertSampleData();