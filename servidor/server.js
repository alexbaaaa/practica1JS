const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// para evitar futuros problemas de cors
app.use(cors());
app.listen(PORT);