import React from 'react';
import Article from './../../components/Article/Article';
import { client } from '../../lib/client';
import { format } from 'date-fns';
import styles from './style.module.scss';
import Title from './../../components/Title';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Content from '../../components/Content';
import Router from 'next/router';
import Button from './../../components/Button';
import Head from 'next/head';
const Post = ({ post }) => {
	const date = format(new Date(post.publishedDate), 'dd MMM yy');
	return (
		<>
			<Head>
				<title>{post.meta_title}</title>
			</Head>
			<Article className={styles.post}>
				<Button disabled={false} onClick={() => Router.back()}>
					<AiOutlineArrowLeft size={50} className={styles.Button} />
				</Button>
				<Title className={styles.postTitle}>{post.title}</Title>
				<p className={styles.postDate}>{date}</p>
				<Content body={post.body} />
			</Article>
		</>
	);
};

// Server Side Rendering
export async function getServerSideProps(context) {
	const query = `*[_type == "post" && slug.current == '${context.params.slug}'][0] `;
	const post = await client.fetch(query);
	return {
		props: {
			post,
		},
	};
}

// Static Side Generation

// export async function getStaticPaths() {
// 	const query = `*[type == "post"]{
// 		slug{
// 			current
// 		}
// 	}`;
// 	const posts = await client.fetch(query);
// 	const paths = posts.map(post => ({
// 		params: post.slug.current,
// 	}));
// 	return {
// 		paths,
// 		fallback: 'blocking',
// 	};
// }
// export async function getStaticProps(context) {
// 	const query = `*[_type == "post" && slug.current == '${context.params.slug}'][0] `;
// 	const post = await client.fetch(query);
// 	return {
// 		props: {
// 			post,
// 		},
// 	};
// }
export default Post;
