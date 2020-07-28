import React from 'react';
import style from '../section/Section.module.css';
import Stat from '../stat/Stat';
import data from '../data.json';
import PropTypes from 'prop-types';

function Section({ title }) {
	return (
		<>
			<h1>Statistics</h1>
			<section className={style.section}>
				{title ? <h2 className={style.title}>{title}</h2> : null}
				<Stat dataJson={data}/>
			</section>
		</>
	)
}

Section.defaultProps = {
	title: 'Upload stats',
};

Section.propTypes = {
	title: PropTypes.string,
}

export default Section;

