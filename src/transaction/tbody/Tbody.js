import React from 'react';
import style from './Tbody.module.css';
import PropTypes from 'prop-types';


function Tbody({ dataJson }) {
	return (
		<>
		<tbody className={style.body}>
				{dataJson.map(data => (
			<tr 
			className={style.string}
			key={data.id}>
				<td className={style.name}>{data.type}</td>
				<td className={style.name}>{data.amount}</td>
				<td className={style.name}>{data.currency}</td>
			</tr>
		))}
		</tbody>
		</>
	)
}

Tbody.propTypes = {
	dataJson: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.number.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default Tbody;