const express = require("express");
//const path = require("path");
const cors = require('cors');
const connectMongo = require("./server/config/db");
const PORT = process.env.PORT || 8001;
const app = express();
connectMongo();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api/users', require('./server/routes/Users'));
app.use('/api/auth', require('./server/routes/Auth'));
app.use('/api/projects', require('./server/routes/Projects'));
app.use('/api/tasks', require('./server/routes/Tasks'));

// Send every other request to the React app
// Define any API routes before this runs
//app.get("*", (req, res) => {
// res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
