import { scaleLinear } from 'd3-scale'

const numbersDomain = [-10000, 10000]
function getRandomNumber(min, max) {
    /** https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript */
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/** using D3 to scale the numbers to the layout constraits. */
function scaleChange(number) {
    return scaleLinear()
        .domain(numbersDomain)
        .range([-2, 2])(number)

}

function calcluateNextValue(values, state) {

    const changeFromLastValue = scaleChange(getRandomNumber(...numbersDomain))
    const lastValue = values[values.length - 1] || 0
    const nextValue = lastValue + changeFromLastValue
    if (nextValue > state.viewBoxHeight) return state.viewBoxHeight - state.paddingY
    if (nextValue < 0) return 0
    return nextValue
}
const initialState = {
    xStartPosition: 0,
    xEndPosition: 0,
    values: [50],
    backgroundPoints: [],
    /** config parameters */
    viewBoxWidth: 100,
    viewBoxHeight: 100,
    padding: 20,
    paddingY: 1,
    stepSize: 3
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'add-line':
            const values = state.values.slice()
            const nextValue = calcluateNextValue(values, state)
            values.push(nextValue)
            /** line is drawn only on second value. so advance the xEndPointer only on the second value. */
            const xEndPosition = values.length > 1 ? state.xEndPosition + state.stepSize : 0
            return Object.assign({}, state, { values, xEndPosition })
        case 'move-chart-forward':

            const ViewBoxNeedUpdate = state.xEndPosition >= state.viewBoxWidth - state.padding
            const xStartPosition = ViewBoxNeedUpdate ? state.xStartPosition + state.stepSize : 0
            return Object.assign({}, state, { xStartPosition })
        default:
            return state;
    }
}