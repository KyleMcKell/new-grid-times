import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<VerticalStoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</VerticalStoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		'main-story'
		'secondary-stories'
		'opinion-stories'
		'advertisement';
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			'main-story secondary-stories'
			'advertisement advertisement'
			'opinion-stories opinion-stories';
		grid-template-columns: auto minmax(125px, 250px);
		row-gap: 48px;
		column-gap: 16px;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid var(--color-gray-300);
		padding-right: 16px;
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const VerticalStoryWrapper = styled.div`
	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
		margin-bottom: 16px;
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		flex-direction: row;
		gap: 32px;
	}
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		&:not(:last-of-type) {
			border-bottom: revert;
			padding-bottom: revert;
			margin-bottom: revert;
		}

		flex: 1;
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
	}
`;

export default MainStoryGrid;
