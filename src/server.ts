import express from 'express'
import '@controllers/UsersController'
import WebSocket from 'ws'
import http from 'http'

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server: server })

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3333)
