import React from 'react'
import Thead from '../thead/Thead'
import Tbody from '../tbody/Tbody'
import style from './Table.module.css'
import data from '../data.json'

function Table() {
	return (
		<>
			<h1>Transaction History</h1>
			<table className={style.transHistory}>
				<Thead />
				<Tbody info={data}/>
			</table>
		</>
	)
}
export default Table;