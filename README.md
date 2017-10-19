# React Following Container

[![Build Status](https://travis-ci.org/sdarmaputra/react-following-container.svg?branch=master)](https://travis-ci.org/sdarmaputra/react-following-container)

[![Coverage Status](https://coveralls.io/repos/github/sdarmaputra/react-following-container/badge.svg)](https://coveralls.io/github/sdarmaputra/react-following-container)

React Higher Order Component (HOC) for creating moving component that sticks and follows when the browser scrolled. 

### Use Cases
- Creating side menu that follows the screen like [Medium](https://medium.com/) does
- Creating social media buttons
- Find more examples [here](https://sdarmaputra.github.io/react-following-container)

### How It Works
1. It wraps the component with a div element that has an absolute position and some javascript function to detect browser scrolling behavior. 
2. When we scroll the browser's window it calculates the new position based on current viewpoint.
3. Its top position changes based on the calculated position.

## Usage
```javascript
const FollowingComponent = followingContainer(WrappedComponent, configurations);
```

### API Reference
`followingContainer(WrappedComponent, configurations)`
It need two parameters to take effect.
- `WrappedComponent` is React component to be wrapped with the container. It can be class or function component. Visit [this link](https://reactjs.org/docs/components-and-props.html#functional-and-class-components) form more informations about both of them. This paramater is **mandatory**.
- `configurations` is custom configurations for the container. Please remember to pass this configurations **as an object**. Check out [configurations section](#configurations) to see the list of available configurations. This parameter is optional.

### Example Code
```javascript
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

### Configurations
You can pass configuration object for the component as second parameter. Here's available options:

| Property | Description | Value type | Default |
| -------- | ----------- | ---------- | ------- |
| position | Position of the container. There're only two options, `left` or `right` | string | `left` |
| marginLeft | Container's left margin (in px). It only takes effect when `position` set to `left` | number | 0 |
| marginRight | Container's right margin (in px). It only takes effect when `position` set to `right` | number | 0 |
| upperStopPoint | Minimum height (in px) the component will start to follow the scroll | number (i.e: 100) | 10 |
| lowerStopPoint | Height (in px) calculated from the bottom of document which the component will stop moving | number (i.e: 100) | 10 |
| viewPortPaddingTop | Top padding (in px) of the component when it starts following the scroll | number (i.e: 100) | 10 |
| hideOnStart | If set to `true` then the component will be hidden when initiated | boolean | false |
| hideOnTop | If set to `true` then the component will be hidden when it reaches `upperStopPoint` again after following the scroll | boolean | false |

## Credits
- Linearicons Free Version ([https://linearicons.com/free](https://linearicons.com/free))
- Icono ([https://saeedalipoor.github.io/icono/](https://saeedalipoor.github.io/icono/))

## License
[MIT](https://opensource.org/licenses/MIT)
