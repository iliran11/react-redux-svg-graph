import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLine, moveChartForward } from '../store/actions'
import Graph from '../components/graph'

class GraphContainer extends React.Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)
        this.polylinePoints = this.polylinePoints.bind(this)
        this.viewBoxCoordinates = this.viewBoxCoordinates.bind(this)
        this.pointerCoordinates = this.pointerCoordinates.bind(this)
        setInterval(this.changeState, 200)
    }
    changeState() {
        this.props.moveChartForward()
        this.props.addLine()
    }
    viewBoxCoordinates() {
        return `${this.props.xStartPosition} 0 100 100`
    }
    polylinePoints() {
        const linePoints = this.props.values.map((value, index) => {
            return [index * this.props.stepSize, value]
        })
        const currentXindex = linePoints.length - 1
        const backgroundPoints = linePoints.concat([
            [
                [currentXindex * this.props.stepSize, this.props.viewboxHeight],
                [0, this.props.viewboxHeight]
            ]
        ])
        return {
            linePoints: linePoints.join(" "),
            backgroundPoints: backgroundPoints.join(" ")

        }
    }
    pointerCoordinates() {
        const lastValuePosition = this.props.values.length - 1
        return {
            pointerX: this.props.xEndPoistion,
            pointerY: this.props.values[lastValuePosition],
            radius: 1
        }
    }
    bindGraphAttributes() {
        return {
            ...this.polylinePoints(),
            ...this.pointerCoordinates(),
            viewBox: this.viewBoxCoordinates()
        }
    }
    render() {
        return (
            <div>
                <Graph {...this.bindGraphAttributes() } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        values: state.values.values,
        xStartPosition: state.values.xStartPosition,
        xEndPoistion: state.values.xEndPosition,
        stepSize: state.values.stepSize,
        viewboxHeight: state.values.viewBoxHeight
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addLine, moveChartForward }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer); 