const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5007;

app.use(cors());
app.use(express.json());


const uri = process.env.atlas;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//route dosyasindan import edilen users dosyasi burada islenerek DB ye gonderiliyor

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
