import { Sparklines, SparklinesLine } from 'react-sparklines';
import React from 'react';


class SparkGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                hi
                <Sparklines data={[5,10]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </div>
        );
    }
}

export default SparkGraph