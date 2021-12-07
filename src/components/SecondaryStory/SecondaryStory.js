import React from 'react';
import styled from 'styled-components/macro';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
	return (
		<StoryAnchor href={`/story/${id}`}>
			<Wrapper>
				<Image alt={image.alt} src={image.src} />
				<Heading>{title}</Heading>
				<div>
					<Abstract>{abstract}</Abstract>
				</div>
			</Wrapper>
		</StoryAnchor>
	);
};

const StoryAnchor = styled.a`
	&:not(:first-of-type) {
		padding-top: 16px;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
	}
`;

const Wrapper = styled.article`
	display: grid;
	grid-template-areas:
		'image heading'
		'image abstract';
	gap: 4px 16px;
	grid-template-columns: 120px 1fr;
	color: var(--color-gray-900);
`;

const Image = styled.img`
	grid-area: image;
	display: block;
	width: 100%;
	height: 120px;
	border-radius: 4px;
	object-fit: cover;
`;

const Heading = styled.h2`
	grid-area: heading;
	font-size: 1.125rem;
	font-weight: var(--font-weight-bold);
	line-height: 1.3;
	/* Optical alignment */
	margin-top: -2px;
`;

const Abstract = styled.p`
	display: -webkit-box;
	grid-area: abstract;
	font-size: 1rem;
	white-space: pre-wrap;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
`;

export default SecondaryStory;
