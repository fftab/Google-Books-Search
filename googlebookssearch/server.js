const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/API.js");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// API Routes
app.use(routes);
// Any * requests go to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// MLab
const MONGODB_URI = "mongodb+srv://fftab:ZAIML0oqmdaF6KZw@cluster0.bmkuq.mongodb.net/google_books_search?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google_books_search",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
