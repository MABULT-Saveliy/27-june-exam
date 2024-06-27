const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Добрый день, Хекслет!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер был запущен на: http://localhost:${port}`);
});
