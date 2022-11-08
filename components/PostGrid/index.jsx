import React from 'react';
import styles from './index.module.scss';

const PostGrid = ({ children }) => {
	return <div className={styles.postGrid}>{children}</div>;
};

export default PostGrid;
