import React from 'react';
import style from './index.module.scss';
import cl from 'classnames';
const Article = ({ children, className }) => {
	return <div className={cl(className, style.article)}>{children}</div>;
};

export default Article;
