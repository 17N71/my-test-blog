import React from 'react';
import style from './index.module.scss';
import cl from 'classnames';
const Section = ({ className, children }) => {
	return <section className={cl(className, style.section)}>{children}</section>;
};

export default Section;
