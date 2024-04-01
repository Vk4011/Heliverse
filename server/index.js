const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./utils/connectDB");
const mongoose = require("mongoose");
// const data = require("./heliverse_mock_data.json");
const User = require("./models/userModel");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/seed", async (req, res) => {
//   try {
//     // Insert data into MongoDB
//     const insertedData = await User.insertMany(data);

//     res
//       .status(201)
//       .json({ message: "Data seeded successfully", data: insertedData });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to seed data", error: error.message });
//   }
// });

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 



const PORT = process.env.PORT || 4000;


app.listen(PORT, async () => {
  const connectDB = async () => {
    try {
      console.log("line");
      const MONGO_URI =
        "mongodb+srv://vikram:772002@cluster0.eamz9pt.mongodb.net/backend_heliverse?retryWrites=true&w=majority&appName=Cluster0";
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected successfully");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  };
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
