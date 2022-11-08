import React from 'react';
import cl from 'classnames';
import style from './index.module.scss';
const Title = ({ children, className = '', type }) => {
	if (type == 'small') {
		return <h3 className={cl(className, style.titleSmall)}>{children}</h3>;
	}
	return <h2 className={cl(className, style.titleMedium)}>{children}</h2>;
};

export default Title;
