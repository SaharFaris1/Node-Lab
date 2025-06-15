import { createServer } from 'http'
import fs from "fs";


const data = fs.readFileSync("./person.jpeg");
const server = createServer((req, res) => {
   res.writeHead(200, {'Content-Type':'image/jpeg' })
    res.end(data)
  })
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000')
})
