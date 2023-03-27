/** @format */
import { PDFExtract } from 'pdf.js-extract'

// fs.readFileSync('../samples/Ventura.pdf')
const pdfExtract = new PDFExtract()
const EmptyString = /^\s*$/

const ExtractInformation = (path, options, errorCB = (data) => {}, callBack = (data) => {}) => {
	pdfExtract.extract(path, options, (err, data) => {
		if (err) return errorCB(err)

		let yvalues = (pageno, value, flag) => {
			let count = 1
			for (let i = 0; i < data.pages[pageno].content.length; i++) {
				if (count < flag && data.pages[pageno].content[i].str === value) {
					count++
					continue
				}
				if (count === flag && data.pages[pageno].content[i].str === value) {
					count = 1
					return data.pages[pageno].content[i].y
				}
			}
		}

		let xvalues = (pageno, value, flag) => {
			let count = 1
			for (let i = 0; i < data.pages[pageno].content.length; i++) {
				if (count < flag && data.pages[pageno].content[i].str === value) {
					count++
					continue
				}
				if (count === flag && data.pages[pageno].content[i].str === value) {
					count = 1
					return data.pages[pageno].content[i].x
				}
			}
		}
		const DETAILS = []
		const DETAILS_RAW = {}
		switch (options.type) {
			case 'option2':
				break
			case 'option3':
				{
					let UCC_X = xvalues(0, 'UCC & Client Code :', 1)
					let UCC_Y = yvalues(0, 'UCC & Client Code :', 1)

					let NAME_X = xvalues(0, 'Name of the Client :', 1)
					let NAME_Y = yvalues(0, 'Name of the Client :', 1)

					let DEALING_OFFICE_ADDRESS = xvalues(0, 'Dealing Office Address :', 1)

					let MOBILE_X = xvalues(0, 'Mobile No. :', 1)
					let MOBILE_Y = yvalues(0, 'Mobile No. :', 1)

					let TRADE_DATE_X = xvalues(0, 'Trade Date :', 1)
					let TRADE_DATE_Y = yvalues(0, 'Trade Date :', 1)

					let PAN_X = xvalues(0, 'PAN of Client :', 1)
					let PAN_Y = yvalues(0, 'PAN of Client :', 1)

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= UCC_X && data.pages[0].content[panCount].x < DEALING_OFFICE_ADDRESS && data.pages[0].content[panCount].y >= UCC_Y && data.pages[0].content[panCount].y < NAME_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					let NameCount = 0
					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= NAME_X && data.pages[0].content[panCount].x < DEALING_OFFICE_ADDRESS && data.pages[0].content[panCount].y >= NAME_Y && data.pages[0].content[panCount].y <= MOBILE_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							if (NameCount <= 1) {
								DETAILS.push(NSDL_ID_RAW)
							}
							NameCount++
						}
					}
					DETAILS.push('Client Address :')
					let Address = []
					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x > NAME_X && data.pages[0].content[panCount].x < DEALING_OFFICE_ADDRESS && data.pages[0].content[panCount].y > NAME_Y && data.pages[0].content[panCount].y < MOBILE_Y - 20 && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							Address.push(NSDL_ID_RAW)
						}
					}
					DETAILS.push(Address.join(','))

					// for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
					// 	if (data.pages[0].content[panCount].x >= MOBILE_X && data.pages[0].content[panCount].x < DEALING_OFFICE_ADDRESS && data.pages[0].content[panCount].y >= MOBILE_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
					// 		let NSDL_ID_RAW = data.pages[0].content[panCount].str
					// 		DETAILS.push(NSDL_ID_RAW)
					// 	}
					// }
				}
				break
			default:
				{
					// Setting up the Keywords to look for
					let NSDL_DOC_ID = null

					let NSDL_X = xvalues(0, 'Contract Note No. :', 1)
					let NSDL_Y = yvalues(0, 'Contract Note No. :', 1)

					let NSE_FNO_X = xvalues(0, 'NSE F&O', 1)
					let NSE_FNO_Y = yvalues(0, 'NSE F&O', 1)

					let IRN_X = xvalues(0, 'Invoice Reference Number (IRN) :', 1)
					let IRN_Y = yvalues(0, 'Invoice Reference Number (IRN) :', 1)

					let SETTLEMETN_NO_X = xvalues(0, 'Settlement No: ', 1)
					let SETTLEMETN_NO_Y = yvalues(0, 'Settlement No: ', 1)

					let TRADE_DATE_X = xvalues(0, 'Trade Date :', 1)
					let TRADE_DATE_Y = yvalues(0, 'Trade Date :', 1)

					let SETTLEMENT_DATE_NO_X = xvalues(0, 'Settlement Date: ', 1)
					let SETTLEMENT_DATE_NO_Y = yvalues(0, 'Settlement Date: ', 1)

					let NAME_OF_CLIENT_X = xvalues(0, 'Name of the Client :', 1)
					let NAME_OF_CLIENT_Y = yvalues(0, 'Name of the Client :', 1)

					let CLIENT_ADDRESS_X = xvalues(0, 'Address Of the Client :', 1)
					let CLIENT_ADDRESS_Y = yvalues(0, 'Address Of the Client :', 1)

					let CLIENT_PHONE_X = xvalues(0, 'Phone of the Client :', 1)
					let CLIENT_PHONE_Y = yvalues(0, 'Phone of the Client :', 1)

					let STATE_X = xvalues(0, 'State / State Code (Place of Supply) :', 1)
					let STATE_Y = yvalues(0, 'State / State Code (Place of Supply) :', 1)

					let PAN_X = xvalues(0, 'PAN Of the Client :', 1)
					let PAN_Y = yvalues(0, 'PAN Of the Client :', 1)

					let UCC_X = xvalues(0, 'UCC of the Client :', 1)
					let UCC_Y = yvalues(0, 'UCC of the Client :', 1)

					let TBOC_X = xvalues(0, 'Trading Back office code: :', 1)
					let TBOC_Y = yvalues(0, 'Trading Back office code: :', 1)

					//LAST Field
					let GSTIN_END_X = xvalues(0, 'available) :', 1)
					let GSTIN_END_Y = yvalues(0, 'available) :', 1)

					// READING Contract NOTE No.
					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= NSDL_X && data.pages[0].content[panCount].x < NSE_FNO_X && data.pages[0].content[panCount].y >= NSDL_Y && data.pages[0].content[panCount].y < IRN_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					// READING IRN
					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= IRN_X && data.pages[0].content[panCount].x <= SETTLEMETN_NO_X && data.pages[0].content[panCount].y >= IRN_Y && data.pages[0].content[panCount].y < TRADE_DATE_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= NAME_OF_CLIENT_X && data.pages[0].content[panCount].y >= NAME_OF_CLIENT_Y - 10 && data.pages[0].content[panCount].y < CLIENT_ADDRESS_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}
					const Address = []
					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= CLIENT_ADDRESS_X && data.pages[0].content[panCount].y >= CLIENT_ADDRESS_Y && data.pages[0].content[panCount].y < CLIENT_PHONE_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							Address.push(NSDL_ID_RAW)
						}
					}
					DETAILS.push(Address.shift())
					DETAILS.push(Address.join(' '))

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= CLIENT_PHONE_X && data.pages[0].content[panCount].y >= CLIENT_PHONE_Y - 10 && data.pages[0].content[panCount].y < STATE_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= STATE_X && data.pages[0].content[panCount].y >= STATE_Y - 10 && data.pages[0].content[panCount].y < PAN_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= PAN_X && data.pages[0].content[panCount].y >= PAN_Y - 10 && data.pages[0].content[panCount].y < UCC_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= UCC_X && data.pages[0].content[panCount].y >= UCC_Y - 10 && data.pages[0].content[panCount].y < TBOC_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}

					for (let panCount = 0; panCount < data.pages[0].content.length - 1; panCount++) {
						if (data.pages[0].content[panCount].x >= TBOC_X && data.pages[0].content[panCount].y >= TBOC_Y - 10 && data.pages[0].content[panCount].y < GSTIN_END_Y && !EmptyString.test(data.pages[0].content[panCount].str)) {
							let NSDL_ID_RAW = data.pages[0].content[panCount].str
							DETAILS.push(NSDL_ID_RAW)
						}
					}
				}
				break
		}

		for (let i = 0; i < DETAILS.length; i += 2) {
			DETAILS_RAW[DETAILS[i]] = DETAILS[i + 1]
		}
		callBack(DETAILS_RAW)
	})
}

// ExtractInformation('../samples/Ventura.pdf')

export { ExtractInformation }
