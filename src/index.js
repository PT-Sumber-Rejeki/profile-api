const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'profile-api', timestamp: new Date().toISOString() });
});

app.get('/ready', (req, res) => {
  res.json({ status: 'ready' });
});

app.get('/api/v1/hello', (req, res) => {
  res.json({ message: 'Hello from profile-api!' });
});

app.listen(PORT, () => {
  console.log(`profile-api listening on port ${PORT}`);
});

module.exports = app;
