import React from 'react';
import style from './Stat.module.css';
import PropTypes from 'prop-types';

function Stat({ dataJson }) {
	function randomColor() {
		return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
	}
	return (
		<>
			<ul className={style.statList}>
				{dataJson.map(data => (
					<li 
					className={style.item} 
					key={data.id}
						style={{ backgroundColor: randomColor() }}>
						<span className={style.label}>{data.label}</span>
						<span className={style.percentage}>{data.percentage}%</span>
					</li>
				))}
			</ul>
		</>
	);
}

Stat.propTypes = {
	info: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	}).isRequired
	).isRequired
}

export default Stat;