import Section from './../components/Section';
import Cover from './../components/Cover';
import SocialNetworks from './../components/SocialNetworks';
import BuyMeCoffee from './../components/BuyMeCoffee';
import Title from '../components/Title';
import { loadPosts } from './api/posts';
import { useState } from 'react';
import PostGrid from './../components/PostGrid/index';
import Post from './../components/Post/index';
import Button from './../components/Button/index';
import Head from 'next/head';
const LOAD_MORE_STEP = 4;
export const getServerSideProps = async () => {
	const { posts, total } = await loadPosts(0, 4);
	return {
		props: {
			posts,
			total,
		},
	};
};

export default function Home({ posts, total }) {
	const [postData, setPostData] = useState(posts);
	const [isLoading, setIsLoading] = useState(false);
	const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
	const isLoadButton = total > loadedAmount;

	const geyMorePosts = async () => {
		setIsLoading(true);
		try {
			const { posts } = await fetch(
				`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
			).then(res => res.json());
			setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
			setPostData([...postData, ...posts]);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};
	return (
		<>
			<Head>
				<title>Narek Grigoryan test blog with project next.js and sanity</title>
			</Head>
			<Section>
				<Cover title={'Narek <br /> Grigoryan'} />
				<SocialNetworks />
				<BuyMeCoffee />
			</Section>
			<Section>
				<Title>New Post</Title>
				<PostGrid>
					{postData.map(
						({
							title,
							image,
							_id,
							publishedDate,
							slug: { current },
							description,
						}) => {
							return (
								<Post
									key={_id}
									title={title}
									slug={current}
									image={image}
									description={description}
								/>
							);
						}
					)}
				</PostGrid>
				{isLoadButton && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button disabled={isLoading} onClick={geyMorePosts}>
							Load more posts...
						</Button>
					</div>
				)}
			</Section>
		</>
	);
}
