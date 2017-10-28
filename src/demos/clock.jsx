import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: null,
            requestPosition: 0,
            intervalPosition: 0,
            intervalProgress:0
        };
        this.repeatOften = this.repeatOften.bind(this)
        this.setInterval = this.setInterval.bind(this)
        requestAnimationFrame(this.repeatOften);
    }
    repeatOften(timestamp) {
        if (!this.state.startTime) {
            this.setState({
                startTime: timestamp
            })
        }
        const timeLimitation = 10000
        var timePassed = timestamp - this.state.startTime;
        const secondsPassed = timePassed / 1000
        const pixelProgress = timePassed / 10
        console.log("pixels per second: ", pixelProgress / timePassed)
        this.requestNode.style.top = Math.min(pixelProgress, 3000) + 'px';
        if (timePassed < timeLimitation) {
            requestAnimationFrame(this.repeatOften);
        }
    }

    setInterval(node) {
        setInterval(() => {
           const newTop =  this.state.intervalProgress + (100/60)
            node.style.top =  `${newTop}px`
            this.setState({
                intervalProgress: newTop
            })
        }, 1000/60)
    }
    render() {
        return (
            <div>
                <div ref={(node) => { this.requestNode = node }} style={styleRequest}>hello requestAnimationFrame!</div>
                <div ref={this.setInterval} style={styleInterval}>hello setInterval!</div>
            </div>
        );
    }
}
const styleRequest = {
    position: 'relative',
    backgroundColor: 'red',
    display: 'inline-block'
}
const styleInterval = {
    position: 'relative',
    backgroundColor: 'yellow',
    display: 'inline-block',
}
export default Clock