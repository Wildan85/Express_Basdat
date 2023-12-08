const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
    origin: "*"
};

// Register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// Koneksi ke database

db.mongoose.connect(db.url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Memanggil routes mobil
require("./app/routes/mobil.routes")(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
