
![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/img/markdownify.gif)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/iliran11/react-redux-svg-graph.git

# Go into the repository
$ cd react-redux-svg-graph

# Install dependencies
$ npm install

# Run the app
$ npm start
```
## Key Decisions

### [Seperation between "dumb" components and container components.](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* `components/graph.jsx` - Stateless Component - Sole responsibility is rendering the layout of the chart svg. meant to be as logic-less as possible.

* `containers/graph.jsx` - stateful component - Responsbile for interacting the redux state, and transform the data so it can be serverd "as-is" to the statelss component. 
 
 ### Dummy Data And Scaling

* a function called `getRandomNumber` is responsible for generating dummy data. values are between -10,000 and 10,000.
 
 * `D3` function called `scaleChange` which wrapping `D3.scaleLinear` is used for scaling those big numbers into actual units which can be rendered.

 ## Animation

 * `viewBox` property of the `svg` is the only animated thing on this example. based on  [css-tricks article on animation](https://css-tricks.com/interactive-data-visualization-animating-viewbox/), [`AttrPlugin`](https://greensock.com/AttrPlugin) has been chosen to animate the chart movement when centered.
 
