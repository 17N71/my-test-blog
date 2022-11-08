import React from 'react';
import cl from 'classnames';
import style from './index.module.scss';
const Cover = ({ title, className }) => {
	return (
		<div className={cl(className, style.cover)}>
			<h1 className={style.title} dangerouslySetInnerHTML={{ __html: title }} />
		</div>
	);
};

export default Cover;
