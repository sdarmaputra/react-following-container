import React from 'react';

import Card from '../../components/Card';

const withSampleData = (WrappedComponent) => {
	return class SamplePage extends React.Component {
		render() {
			let articles = [];
			let titles = [
				'A Small Guide About How to be Awesome \\m/',
				'What\'re The Differences Between Programmer, Developer, and Engineer?',
				'What I\'ve Learned After A Year Learning Programming',
				'How to Calculate Your Awesomeness',
				'Why Programmer Become More Productive at Night?',
				'Which One is Better, Night Owl or Early Bird?'
			];
			
			for (let i = 0; i < 10; i++) {
				articles.push({
					title: titles[i % titles.length],
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ultricies tellus. Curabitur eget dictum sapien. Maecenas gravida ut diam vel mollis. Etiam nec sodales mauris, semper tempus orci. Donec sed quam nec est vestibulum aliquam. Pellentesque auctor ante eget velit tincidunt congue.'	
				});
			}

			return (
				<div>
					<WrappedComponent {...this.props} />
					<div className='content-wrapper'>
					{
						articles.map((article, index) => <Card key={index} title={article.title} content={article.content} />)
					}
					</div>
				</div>
			);
		}
	}
}

export default withSampleData;
