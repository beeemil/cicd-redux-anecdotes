const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/version', (_req, res) => {
  res.send('6')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
})
