import React from 'react';
import style from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from './../ScreenEgg/ScreenEgg';

const BuyMeCoffee = ({ className = '' }) => {
	return (
		<ScreenEgg type={'right'}>
			<div className={cl(className, style.buyCoffee)}>
				<a className={style.buyCoffeeButton}>Buy me some coffee</a>
			</div>
		</ScreenEgg>
	);
};
export default BuyMeCoffee;
