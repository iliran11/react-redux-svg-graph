import React from 'react';
import { TweenLite } from "gsap";

const domNodes = {
    svgElement: null
}

export default function Graph(props) {
    const { backgroundPoints, linePoints, pointerX, pointerY, viewBox } = props
    if (domNodes.svgElement !== null) TweenLite.to(domNodes.svgElement, 0.5, { attr: { viewBox: viewBox } });
    return (
        <svg ref={(element) => { domNodes.svgElement = element }} viewBox="0 0 100 100" preserveAspectRatio="none" style={svgStyle}>
            <g>
                {/* background */}
                <polyline points={backgroundPoints} style={backgroundStyle}></polyline>
                {/* lines */}
                <polyline points={linePoints} style={linesStyle}></polyline>
                {/* circle Tracker */}
                <circle cx={pointerX} cy={pointerY} r="1" />
            </g>
        </svg>
    );
}

const backgroundStyle = {
    stroke: 'none',
    strokeWidth: 0,
    fillOpacity: 0.1,
    fill: 'blue',
    pointerEvents: 'auto'
}
const linesStyle = {
    stroke: 'blue',
    strokeWidth: 0.1,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    fill: 'none'
}
const svgStyle = {
    position: 'absolute',
    left: 0,
    maxHeight:'100vh',
    width:'70vw'
}