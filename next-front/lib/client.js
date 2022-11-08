import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
export const clientConfig = {
	projectId: 'd7kzve6t',
	dataset: 'production',
};
export const client = sanityClient({
	projectId: 'd7kzve6t',
	dataset: 'production',
	apiVersion: '2022-11-08',
	useCdn: true,
	token: process.env.NEXT_SANITY_TOKEN,
	ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);
