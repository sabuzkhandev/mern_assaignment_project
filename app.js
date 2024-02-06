const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('Server listening on port 5500')
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('This is Home Page')
    res.end()
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('This is About Page')
    res.end()
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('This is Contact Page')
    res.end()
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) throw err
      console.log('File written successfully')
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello World Created Successfully')
  } else if (req.url === '/upload' && req.method === 'POST') {
    const upload = multer({ dest: 'uploads/' }).single('file')
    upload(req, res, (err) => {
      if (err) {
        console.error(err)
        return res.end('Error uploading file.')
      }
      res.end('File uploaded successfully.')
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('Page not found')
  }
  res.end()
})

server.listen(5500)
