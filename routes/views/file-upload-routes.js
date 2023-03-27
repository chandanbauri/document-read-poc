/** @format */

import { Router } from 'express'

const fileUploadViews = Router()

fileUploadViews.get('/', function (req, res) {
	res.render('upload-document')
})

export { fileUploadViews }
