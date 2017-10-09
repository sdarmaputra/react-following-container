# React Following Container (WIP)

React High Order Component (HOC) for creating component that sticks and follows when the browser scrolled. Find more examples [here](https://sdarmaputra.github.io/react-following-container).

*Note: this project is still under development*

## Usage
```
const FollowingComponent = followingContainer(WrappedComponent, configs);
```

## Example 
```
import React from 'react';
import followingContainer from 'react-following-container';

const Actions = (props) => (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
);

const configs = {
    upperStopPoint: 200,
    viewportPaddingTop: 200,
    hideOnStart: true,
    hideOnTop: true
};
const FollowingActions = followingContainer(Actions, configs);

const App = (props) => (
    <div>
        <FollowingActions />
        <div className='content'>
            <p>Example content.</p>
        </div>
    </div>
);

export default App;
```

## Configurations
You can pass configuration object for the component as second parameter. Here's available options:

| Property | Description | Value type | Default |
| -------- | ----------- | ---------- | ------- |
| upperStopPoint | Minimum height (in px) the component will start to follow the scroll | number (i.e: 100) | 10 |
| viewPortPaddingTop | Top padding (in px) of the component when it starts following the scroll | number (i.e: 100) | 10 |
| hideOnStart | If set to `true` then the component will be hidden when initiated | boolean | false |
| hideOnTop | If set to `true` then the component will be hidden when it reaches `upperStopPoint` again after following the scroll | boolean | false |

## Credits
- Linearicons Free Version ([https://linearicons.com/free](https://linearicons.com/free))
- Icono ([https://saeedalipoor.github.io/icono/](https://saeedalipoor.github.io/icono/))

## License
[MIT](https://opensource.org/licenses/MIT)
