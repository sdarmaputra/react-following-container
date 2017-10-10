import React from 'react';

import Actions from '../components/Actions';
import Card from '../components/Card';
import withSampleData from './utils/withSampleData';
import followingContainer from '../../libs/followingContainer';

const FollowingActions = followingContainer(Actions, {
	position: 'left',
	marginLeft: 96,
	upperStopPoint: 200,
	viewportPaddingTop: 200,
	hideOnStart: true,
	hideOnTop: true
});

const ActionsWrapper = (props) => {
	let actions = [
		{
			icon: 'lnr lnr-thumbs-up'
		},
		{
			icon: 'lnr lnr-bookmark'
		},
		{
			icon: 'lnr lnr-link'
		}
	];

	return <FollowingActions actions={actions} />;
}

const Page = withSampleData(ActionsWrapper);

const MediumLikeActions = (props) => <Page />;

export default MediumLikeActions;
