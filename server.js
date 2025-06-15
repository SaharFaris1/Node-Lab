import { createServer } from 'http'
import { readFile } from 'fs'
const server = createServer((req, res) => {
  readFile('person.jpeg', (_, data) => {
    res.writeHead(200, { 
        'Content-Type':'image/jpeg' })
    res.end(data)
  })})
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000')
})