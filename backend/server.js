const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/datHang', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công!'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('API đang chạy!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});