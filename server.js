const http = require('http')
const express = require('express')
const path = require("path")
const { response } = require('express')
const port = 3000
const app = express()
const fs =require('fs')

app.use('/script', express.static(__dirname))

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    }
    )
})

app.use(express.static('images'))

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong.')
    }else{
        console.log('Server is up at port 3000')
    }
});
