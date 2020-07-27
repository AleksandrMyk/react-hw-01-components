import React from 'react'
import style from './Thead.module.css'

function Thead() {
	return (
		<>
		<thead className="head">
			<tr className="string">
				<th className={style.name}>Type</th>
					<th className={style.name}>Amount</th>
					<th className={style.name}>Currency</th>
			</tr>
		</thead>
		</>
	)
}
export default Thead;