/** @format */

import { Router } from 'express'
import multer from 'multer'
import { ExtractInformation } from '../utilities/file-upload.js'
import { v4 as uuidv4 } from 'uuid'

const fileUploadRoutes = Router()

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './')
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(' ').join('-')
		cb(null, uuidv4() + '-' + fileName)
	},
})
const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'application/pdf') {
			cb(null, true)
		} else {
			cb(null, false)
			return cb(new Error('Only .pdf is allowed!'))
		}
	},
})

fileUploadRoutes.post('/upload-pdf', upload.single('CDLS'), async (req, res) => {
	try {
		console.log(req.body)
		let data = ExtractInformation(
			req.file.path,
			{
				type: req.body.selectField,
			},
			() => {},
			(data) => {
				res.render('uploaded-details', {
					details: {
						data: JSON.stringify(data),
					},
				})
			},
		)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
})

export { fileUploadRoutes }
