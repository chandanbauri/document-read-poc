/**
 * let x1 = xvalues(2, 'ISIN', 2)
 * let x2 = xvalues(2, 'ISIN Description', 2)
 * let x3 = xvalues(2, 'Folio No.', 1)
 * let x4 = xvalues(2, 'No. of', 2)
 * let x5 = xvalues(2, ' Per Units', 1)
 * let x6 = xvalues(2, 'Total Cost', 1)
 * let x7 = xvalues(2, 'Current NAV', 1)
 * let x8 = xvalues(2, 'Current Value', 1)
 * let x9 = xvalues(2, 'Profit/(Loss)', 1)
 * let x10 = xvalues(2, 'Annualised', 1)
 * let y1 = yvalues(2, 'Mutual Fund Folios (F)', 2)
 *
 * if (x5 === undefined) x5 = 250
 *
 * let temp = ''
 * let last_y_value = 0
 * let temp1 = ''
 * let last_y_value1 = 0
 * let temp2 = ''
 * let last_y_value2 = 0
 * let temp3 = ''
 * let last_y_value3 = 0
 * let temp4 = ''
 * let last_y_value4 = 0
 * let temp5 = ''
 * let last_y_value5 = 0
 * let temp6 = ''
 * let last_y_value6 = 0
 * let temp7 = ''
 * let last_y_value7 = 0
 * let temp8 = ''
 * let last_y_value8 = 0
 * let temp9 = ''
 * let last_y_value9 = 0
 *
 * for (i = 0; i < data.pages[2].content.length - 1; i++) {
 * 	if (data.pages[2].content[i].x >= x1 && data.pages[2].content[i].y > y1 && data.pages[2].content[i].x < x2) {
 * 		last_y_value = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value && data.pages[2].content[i + 1].y <= last_y_value + 10) {
 * 			temp += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp += data.pages[2].content[i].str
 * 			// console.log(temp);
 * 			ISIN_UCC.push(temp)
 * 			temp = ''
 * 			last_y_value = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x2 && data.pages[2].content[i].x < x3 && data.pages[2].content[i].y > y1) {
 * 		last_y_value1 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value1 && data.pages[2].content[i + 1].y <= last_y_value1 + 10) {
 * 			temp1 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp1 += data.pages[2].content[i].str
 * 			// console.log(temp1);
 * 			isin_des.push(temp1)
 * 			temp1 = ''
 * 			last_y_value1 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x3 && data.pages[2].content[i].x < x4 && data.pages[2].content[i].y > y1) {
 * 		last_y_value2 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value2 && data.pages[2].content[i + 1].y <= last_y_value2 + 10) {
 * 			temp2 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp2 += data.pages[2].content[i].str
 * 			// console.log(temp2);
 * 			folio_no.push(temp2)
 * 			temp2 = ''
 * 			last_y_value2 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x4 && data.pages[2].content[i].x < x5 && data.pages[2].content[i].y > y1) {
 * 		last_y_value3 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value3 && data.pages[2].content[i + 1].y <= last_y_value3 + 10) {
 * 			temp3 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp3 += data.pages[2].content[i].str
 * 			// console.log(temp3);
 * 			no_of_unit.push(temp3)
 * 			temp3 = ''
 * 			last_y_value3 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x5 && data.pages[2].content[i].x < x6 && data.pages[2].content[i].y > y1) {
 * 		last_y_value4 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value4 && data.pages[2].content[i + 1].y <= last_y_value4 + 10) {
 * 			temp4 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp4 += data.pages[2].content[i].str
 * 			// console.log(temp4);
 * 			Average_cost_per_unit.push(temp4)
 * 			temp4 = ''
 * 			last_y_value4 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x6 && data.pages[2].content[i].x < x7 && data.pages[2].content[i].y > y1) {
 * 		last_y_value5 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value5 && data.pages[2].content[i + 1].y <= last_y_value5 + 10) {
 * 			temp5 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp5 += data.pages[2].content[i].str
 * 			// console.log(temp5);
 * 			total_cost.push(temp5)
 * 			temp5 = ''
 * 			last_y_value5 = 0
 * 		}
 * 		// total_cost.push(data.pages[2].content[i].str);
 * 	} else if (data.pages[2].content[i].x >= x7 && data.pages[2].content[i].x < x8 && data.pages[2].content[i].y > y1) {
 * 		last_y_value6 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value6 && data.pages[2].content[i + 1].y <= last_y_value6 + 10) {
 * 			temp6 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp6 += data.pages[2].content[i].str
 *
 * 			current_nav.push(temp6)
 * 			temp6 = ''
 * 			last_y_value6 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x8 && data.pages[2].content[i].x < x9 && data.pages[2].content[i].y > y1) {
 * 		last_y_value7 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value7 && data.pages[2].content[i + 1].y <= last_y_value7 + 10) {
 * 			temp7 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp7 += data.pages[2].content[i].str
 * 			current_val.push(temp7)
 * 			temp7 = ''
 * 			last_y_value7 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x9 && data.pages[2].content[i].x < x10 && data.pages[2].content[i].y > y1) {
 * 		last_y_value8 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value8 && data.pages[2].content[i + 1].y <= last_y_value8 + 10) {
 * 			temp8 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp8 += data.pages[2].content[i].str
 *
 * 			unrealised_profit_loss.push(temp8)
 * 			temp8 = ''
 * 			last_y_value8 = 0
 * 		}
 * 	} else if (data.pages[2].content[i].x >= x10 && data.pages[2].content[i].y > y1) {
 * 		last_y_value9 = data.pages[2].content[i].y
 * 		if (data.pages[2].content[i + 1].y > last_y_value9 && data.pages[2].content[i + 1].y <= last_y_value9 + 10) {
 * 			temp9 += data.pages[2].content[i].str + ' '
 * 		} else {
 * 			temp9 += data.pages[2].content[i].str
 * 			annual_return.push(temp9)
 * 			temp9 = ''
 * 			last_y_value9 = 0
 * 		}
 * 	}
 * }
 *
 * x1 = xvalues(3, 'ISIN', 1)
 * x2 = xvalues(3, 'ISIN Description', 1)
 * x3 = xvalues(3, 'Folio No.', 1)
 * x4 = xvalues(3, 'No. of', 1)
 * x5 = xvalues(3, ' Per Units', 1)
 * x6 = xvalues(3, 'Total Cost', 1)
 * x7 = xvalues(3, 'Current NAV', 1)
 * x8 = xvalues(3, 'Current Value', 1)
 * x9 = xvalues(3, 'Profit/(Loss)', 1)
 * x10 = xvalues(3, 'Annualised', 1)
 * y1 = yvalues(3, 'ISIN', 1)
 * let y2 = yvalues(3, 'Total', 1)
 *
 * if (x10 != undefined) {
 * 	temp = ''
 * 	last_y_value = 0
 * 	temp1 = ''
 * 	last_y_value1 = 0
 * 	temp2 = ''
 * 	last_y_value2 = 0
 * 	temp3 = ''
 * 	last_y_value3 = 0
 * 	temp4 = ''
 * 	last_y_value4 = 0
 * 	temp5 = ''
 * 	last_y_value5 = 0
 * 	temp6 = ''
 * 	last_y_value6 = 0
 * 	temp7 = ''
 * 	last_y_value7 = 0
 * 	temp8 = ''
 * 	last_y_value8 = 0
 * 	temp9 = ''
 * 	last_y_value9 = 0
 * 	let ISIN_UCC1 = []
 * 	let isin_des1 = []
 * 	let folio_no1 = []
 * 	let no_of_unit1 = []
 * 	let Average_cost_per_unit1 = []
 * 	let total_cost1 = []
 * 	let current_nav1 = []
 * 	let current_val1 = []
 * 	let unrealised_profit_loss1 = []
 * 	let annual_return1 = []
 *
 * 	for (i = 0; i < data.pages[3].content.length - 1; i++) {
 * 		if (data.pages[3].content[i].x >= x1 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].x < x2 && data.pages[3].content[i].y < y2) {
 * 			last_y_value = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value && data.pages[3].content[i + 1].y <= last_y_value + 10) {
 * 				temp += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp += data.pages[3].content[i].str
 *
 * 				ISIN_UCC1.push(temp)
 * 				temp = ''
 * 				last_y_value = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x2 && data.pages[3].content[i].x < x3 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value1 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value1 && data.pages[3].content[i + 1].y <= last_y_value1 + 10) {
 * 				temp1 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp1 += data.pages[3].content[i].str
 *
 * 				isin_des1.push(temp1)
 * 				temp1 = ''
 * 				last_y_value1 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x3 && data.pages[3].content[i].x < x4 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value2 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value2 && data.pages[3].content[i + 1].y <= last_y_value2 + 10) {
 * 				temp2 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp2 += data.pages[3].content[i].str
 *
 * 				folio_no1.push(temp2)
 * 				temp2 = ''
 * 				last_y_value2 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x4 && data.pages[3].content[i].x < x5 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value3 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value3 && data.pages[3].content[i + 1].y <= last_y_value3 + 10) {
 * 				temp3 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp3 += data.pages[3].content[i].str
 *
 * 				no_of_unit1.push(temp3)
 * 				temp3 = ''
 * 				last_y_value3 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x5 && data.pages[3].content[i].x < x6 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value4 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value4 && data.pages[3].content[i + 1].y <= last_y_value4 + 10) {
 * 				temp4 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp4 += data.pages[3].content[i].str
 *
 * 				Average_cost_per_unit1.push(temp4)
 * 				temp4 = ''
 * 				last_y_value4 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x6 && data.pages[3].content[i].x < x7 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value5 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value5 && data.pages[3].content[i + 1].y <= last_y_value5 + 10) {
 * 				temp5 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp5 += data.pages[3].content[i].str
 *
 * 				total_cost1.push(temp5)
 * 				temp5 = ''
 * 				last_y_value5 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x7 && data.pages[3].content[i].x < x8 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value6 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value6 && data.pages[3].content[i + 1].y <= last_y_value6 + 10) {
 * 				temp6 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp6 += data.pages[3].content[i].str
 *
 * 				current_nav1.push(temp6)
 * 				temp6 = ''
 * 				last_y_value6 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x8 && data.pages[3].content[i].x < x9 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value7 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value7 && data.pages[3].content[i + 1].y <= last_y_value7 + 10) {
 * 				temp7 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp7 += data.pages[3].content[i].str
 * 				current_val1.push(temp7)
 * 				temp7 = ''
 * 				last_y_value7 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x9 && data.pages[3].content[i].x < x10 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value8 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value8 && data.pages[3].content[i + 1].y <= last_y_value8 + 10) {
 * 				temp8 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp8 += data.pages[3].content[i].str
 * 				unrealised_profit_loss1.push(temp8)
 * 				temp8 = ''
 * 				last_y_value8 = 0
 * 			}
 * 		} else if (data.pages[3].content[i].x >= x10 && data.pages[3].content[i].y > y1 && data.pages[3].content[i].y < y2) {
 * 			last_y_value9 = data.pages[3].content[i].y
 * 			if (data.pages[3].content[i + 1].y > last_y_value9 && data.pages[3].content[i + 1].y <= last_y_value9 + 10) {
 * 				temp9 += data.pages[3].content[i].str + ' '
 * 			} else {
 * 				temp9 += data.pages[3].content[i].str
 * 				annual_return1.push(temp9)
 * 				temp9 = ''
 * 				last_y_value9 = 0
 * 			}
 * 		}
 * 	}
 *
 * 	ISIN_UCC1 = ISIN_UCC1.slice(1)
 * 	no_of_unit1 = no_of_unit1.slice(1)
 * 	Average_cost_per_unit1 = Average_cost_per_unit1.slice(1)
 * 	total_cost1 = total_cost1.slice(1)
 * 	current_nav1 = current_nav1.slice(2)
 * 	current_val1 = current_val1.slice(2)
 * 	unrealised_profit_loss1 = unrealised_profit_loss1.slice(1)
 * 	annual_return1 = annual_return1.slice(1)
 *
 * 	for (let i = 0; i < ISIN_UCC1.length; i++) {
 * 		ISIN_UCC.push(ISIN_UCC1[i])
 * 		isin_des.push(isin_des1[i])
 * 		folio_no.push(folio_no1[i])
 * 		no_of_unit.push(no_of_unit1[i])
 * 		Average_cost_per_unit.push(Average_cost_per_unit1[i])
 * 		total_cost.push(total_cost1[i])
 * 		current_nav.push(current_nav1[i])
 * 		current_val.push(current_val1[i])
 * 		unrealised_profit_loss.push(unrealised_profit_loss1[i])
 * 		annual_return.push(annual_return1[i])
 * 	}
 * }
 *
 * @format
 */
