export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{
			name: 'meta_title',
			type: 'string',
			title: 'Meta title',
			validation: Rule => Rule.required().max(80),
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: Rule => Rule.required().max(80),
		},
		{
			name: 'publishedDate',
			type: 'date',
			title: 'Published Date',
			validation: Rule => Rule.required(),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			validation: Rule => Rule.required(),
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					options: {
						isHighlighted: true,
					},
				},
				{
					name: 'attribution',
					type: 'string',
					title: 'Attribution',
				},
			],
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: Rule => Rule.required(),
			options: {
				source: 'title',
				maxLength: 200,
				slugify: input =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: Rule => Rule.required(),
		},
		{
			name: 'body',
			title: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
					validation: Rule => Rule.required(),
				},
				{
					type: 'image',
				},
			],
		},
	],
};
