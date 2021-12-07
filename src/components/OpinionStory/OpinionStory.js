import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
	return (
		<StoryAnchor href={`/story/${id}`}>
			<Wrapper>
				<Avatar alt="" src={avatar} />
				<OpinionText>
					<AuthorName>{author}</AuthorName>
					<ArticleTitle>{title}</ArticleTitle>
				</OpinionText>
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

	@media ${QUERIES.tabletOnly} {
		&:not(:first-of-type) {
			padding-top: 0px;
		}

		&:not(:last-of-type) {
			border-bottom: none;
			padding-bottom: 0px;
		}
	}
`;

const Wrapper = styled.article`
	color: var(--color-gray-900);
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-areas: 'text avatar';
	gap: 16px;

	@media ${QUERIES.tabletOnly} {
		grid-template-areas: 'avatar' 'text';
		gap: 8px;
	}
`;

const Avatar = styled.img`
	display: block;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
	grid-area: avatar;
`;

const OpinionText = styled.div`
	grid-area: text;
`;

const AuthorName = styled.p`
	font-size: 1.125rem;
	font-weight: var(--font-weight-medium);
	color: var(--color-gray-700);
	margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: var(--font-weight-bold);
	line-height: 1.3;
`;

export default OpinionStory;
