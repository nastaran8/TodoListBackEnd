import express from "express"
import * as fs from 'fs';

const DIR = 'codez'

const app = express()
app.use(express.json())

const hashtable = {}

app.post('/memory/:key', (req, res) => {
  hashtable[req.params.key] = req.body.data
  res.send()
})

app.get('/memory/:key', (req, res) => {
  const key = req.params.key
  if (key in hashtable) {
    return res.send(hashtable[key])
  }
  res.send('null')
})

app.post('/disk/:key', (req, res) => {
  const destinationFile = `${DIR}/${req.params.key}`
  fs.writeFileSync(destinationFile, req.body.data)
  res.send()
})

app.get('/disk/:key', (req, res) => {
  const destinationFile = `${DIR}/${req.params.key}`
  try {
    const data = fs.readFileSync(destinationFile)
    res.send(data)
  } catch (e) {
    res.send('null')
  }
})

app.listen(4444, () => {
  console.log('Listening on PORT 4444')
})