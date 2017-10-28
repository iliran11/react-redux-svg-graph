import React from 'react';
const linesStyle = {
    stroke: 'slategray',
    strokeWidth: '1',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    fill: 'none'
}
const backgroundStyle = {
    stroke: 'none',
    strokeWidth: 0,
    fillOpacity: 0.1,
    fill: 'red',
    pointerEvents: 'auto'
}

const backgroundPoints = '0,0 15,10 15,20 30,15'
const linePoints = '0,0 15,10 15,20 30,15'
function Graph(props) {
    return (
        <svg viewBox="0 0 240 60" preserveAspectRatio="none"><g><polyline points="2 58 238 2 238 58 2 58 2 58" style="stroke: none; stroke-width: 0; fill-opacity: 0.1; fill: blue; pointer-events: auto;"></polyline><polyline points="2 58 238 2" style="stroke: blue; stroke-width: 1; stroke-linejoin: round; stroke-linecap: round; fill: none;"></polyline></g></svg>
    )
}

export default Graph

