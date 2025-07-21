const express = require('express');

const app = express();
const dataRouter = require('./routes/data'); // ✅ Make sure this file exists

app.use(express.json()); // ✅ Middleware to parse JSON
app.use("/api", dataRouter); // ✅ Route prefix

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
