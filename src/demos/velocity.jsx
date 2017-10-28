import React from 'react'
import  {VelocityComponent}  from 'velocity-react'
console.log(VelocityComponent)

class VelocityDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubComponent: true
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      showSubComponent: !this.state.showSubComponent
    })
  }
  render() {
    console.log(this.state.showSubComponent)
    return (
      <div>
        <button onClick={this.toggle}>toggle!</button>
        <VelocityComponent animation={{ width: this.state.showSubComponent ? 500 : 100 }} duration={500}>
          <div>
            <h1 style={style}>Hello!</h1>
          </div>
        </VelocityComponent>
      </div>
    );
  }
}

const style = {
  // height: 100,
  // width: 100,
  backgroundColor: 'red'
}

export default VelocityDemo