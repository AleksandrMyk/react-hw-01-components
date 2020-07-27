import React from 'react';
import style from './FriendItems.module.css';
import PropTypes from 'prop-types';

function FriendItems({ info }) {
	return (
		<>
		{info.map(data => (
			<li 
			className={style.item}
			key={data.id}>
				<span 
					className={data.isOnline ? style.statusOnline : style.statusOffline}>
				</span>
				<img className={style.avatar}
					src={data.avatar}
					alt=""
					width="48" />
				<p className={style.name}>{data.name}</p>
			</li>
		))}
		</>
	)
}

FriendItems.propTypes = {
	info: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.node.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.node.isRequired,
		}).isRequired,
	).isRequired,
};

export default FriendItems;