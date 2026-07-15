const express = require("express");
const cors = require("cors");
//const db = require('./db/connection')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas (las agregamos después)
// app.use('/api/animals', require('./routes/animals'))
// app.use('/api/appointments', require('./routes/appointments'))

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
