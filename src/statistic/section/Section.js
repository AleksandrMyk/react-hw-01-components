import React from 'react';
import style from '../section/Section.module.css';
import data from '../data.json';
import Title from '../title/Title';
import Stat from '../stat/Stat';

function Section() {
	return (
		<>
			<h1>Statistics</h1>
			<section className={style.section}>
				<Title />
				<Stat info={data}/>
			</section>
		</>
	)
}

export default Section;
