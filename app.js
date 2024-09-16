const express = require('express')
const path = require('path')
const jsonServer = require('json-server')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use('/api',jsonServer.router('api/db.json'))

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/version', (_req, res) => {
  res.send('9')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
