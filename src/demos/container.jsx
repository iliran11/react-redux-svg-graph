import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeStateAction from '../actions.js'

class stateDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.changeState = this.changeState.bind(this)
    }
    changeState() {
        this.props.changeStateAction('thank you!')
    }
    render() {
        console.log(this.props.liranState)
        return (
            <div>
                <button onClick={this.changeState}>change State</button>change State
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        liranState: state,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeStateAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(stateDemo); 