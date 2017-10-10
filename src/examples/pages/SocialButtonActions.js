import React from 'react';

import SocialButtons from '../components/SocialButtons';
import withSampleData from './utils/withSampleData';
import followingContainer from '../../libs/followingContainer';

const FollowingActions = followingContainer(SocialButtons, {
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
			icon: 'icono-facebook',
			type: 'facebook'
		},
		{
			icon: 'icono-twitter',
			type: 'twitter'
		},
		{
			icon: 'icono-gplus',
			type: 'gplus'
		},
		{
			icon: 'icono-mail',
			type: 'mail'
		}
	];

	return <FollowingActions actions={actions} />;
}

const Page = withSampleData(ActionsWrapper);

const SocialButtonActions = (props) => <Page />;

export default SocialButtonActions;
