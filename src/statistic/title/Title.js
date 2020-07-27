import React from 'react';
import style from '../title/Title.module.css';
import PropTypes from 'prop-types';

function Title({ title }) {
	return (
	<>
		<h2 className={style.title}>{title}</h2>
	</>
	)
}

Title.defaultProps = {
	title: 'Upload stats',
};

Title.propTypes = {
	title: PropTypes.string,
}
export default Title;