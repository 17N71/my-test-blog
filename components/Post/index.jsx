import React from 'react';
import Image from 'next/image';
import { urlFor } from './../../lib/client';
import Link from 'next/link';
import styles from './index.module.scss';
import Title from './../Title';

const Post = ({ image, title, slug, description }) => {
	return (
		<Link href={`Post/${slug}`} className={`${styles.post} ${styles.postLink}`}>
			<Title type="small">{title}</Title>
			<div className={styles.postContent}>
				<div>
					<Image
						src={urlFor(image).url()}
						width={100}
						height={100}
						alt={image.caption}
					/>
				</div>
				<p className={styles.postDescription}>{description}</p>
			</div>
		</Link>
	);
};

export default Post;
