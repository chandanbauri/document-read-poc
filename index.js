/** @format */

import express from 'express'
import http from 'http'
import { fileUploadViews } from './routes/views/file-upload-routes.js'
import { fileUploadRoutes } from './routes/file-upload.js'

/* CONSTANTS */
const PORT = 3000
/* CONSTANTS */

/* NODE APP */
const app = express()
/* NODE APP */

/* NODE SERVER */
const server = http.createServer(app)
/* NODE SERVER */

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', fileUploadViews)
app.use('/', fileUploadRoutes)

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
