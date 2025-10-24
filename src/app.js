const express = require('express');
const cors = require('cors');
const router = require('./routes/routes')
const app = express();
const ApiError = require("./utils/apiError")

app.use(cors());
app.use(express.json());
app.use("/",router)

app.get('/', (req, res) => {
  res.send('Server hoạt động bình thường ✅');
});

app.use((req,res,next) => {
  return next(new ApiError(404, " Resource not found "))
});

app.use((err,req,res, next) =>{
  return res.status(err.statusCode || 500).json({
    message : err.message || "Internal server error"
  }) 
});
module.exports = app;
