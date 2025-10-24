const express = require('express');
const cors = require('cors');
const router = require('./routes/routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use("/",router)

app.get('/', (req, res) => {
  res.send('Server hoạt động bình thường ✅');
});

// Gắn tất cả routes

module.exports = app;
