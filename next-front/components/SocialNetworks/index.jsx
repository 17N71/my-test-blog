import React, { createElement } from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from './../ScreenEgg/ScreenEgg';

import {
	AiFillYoutube,
	AiFillFacebook,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const socialsNetworks = [
	{
		id: 1,
		icon: AiFillYoutube,
	},
	{
		id: 2,
		icon: AiFillFacebook,
	},
	{
		id: 3,
		icon: AiFillTwitterCircle,
	},
];
const SocialNetworks = ({ className }) => {
	return (
		<ScreenEgg className={''} type="left">
			<ul className={cl(styles.list, className)}>
				{socialsNetworks.map(({ icon, id }) => (
					<li className={styles.listItem} key={id}>
						<a className={styles.listLink}>
							{React.createElement(icon, { size: 40, color: 'black' })}
						</a>
					</li>
				))}
			</ul>
		</ScreenEgg>
	);
};

export default SocialNetworks;
