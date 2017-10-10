import React from 'react';

import SocialButtons from '../components/SocialButtons';
import Actions from '../components/Actions';
import withSampleData from './utils/withSampleData';
import followingContainer from '../../libs/followingContainer';

const FollowingSocialButtons = followingContainer(SocialButtons, {
	position: 'right',
	upperStopPoint: 200,
	viewportPaddingTop: 200,
	hideOnStart: false,
	hideOnTop: false
});
const FollowingActions = followingContainer(Actions, {
	position: 'left',
	marginLeft: 96,
	upperStopPoint: 200,
	viewportPaddingTop: 200,
	hideOnStart: true,
	hideOnTop: true
});

const ActionsWrapper = (props) => {
	let socialButtons = [
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

	return (
		<div>
			<FollowingSocialButtons padded={false} actions={socialButtons} />;
			<FollowingActions actions={actions} />;
		</div>
	);
}

const Page = withSampleData(ActionsWrapper);

const MultipleActions = (props) => <Page />;

export default MultipleActions;
