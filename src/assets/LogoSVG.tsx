import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_2"
        data-name="Layer 2"
        viewBox="0 0 77.57 34.57"
        {...props}
    >
        <defs>
            <style>
                {".cls-2{stroke:currentcolor;stroke-miterlimit:10;fill:none;stroke-width:2px}"}
            </style>
        </defs>
        <g id="Layer_1-2">
            <path
                d="M76.2 16.16c-1.81 2.15-15.16 17.45-37.52 17.41-22.23-.04-35.49-15.24-37.32-17.41C4.03 13.58 17.57.99 38.82 1c21.2.01 34.71 12.57 37.38 15.16Z"
                className="cls-2"
            />
            <circle cx={38.78} cy={17.29} r={16.25} className="cls-2" />
            <path
                d="M37.57 16.44c-3.34-1.67-7.37-1.24-9.77 1.85.87 2.91 5.45 5.13 10.98 5.13s10.39-2.35 11.05-5.39c-3.71 1.64-8.73.53-12.26-1.59Z"
                style={{
                    stroke: "currentcolor",
                    strokeMiterlimit: 10,
                    strokeWidth: ".47px",
                }}
            />
            <path
                d="M47.9 11.93a3.451 3.451 0 0 1-3.02 1.79c-1.91 0-3.46-1.55-3.46-3.46 0-.22.03-.43.06-.64-.86-.11-1.75-.18-2.67-.18-6.3 0-11.41 2.81-11.41 6.28 0 .35.07.69.17 1.03 2.46-3.16 6.59-3.6 10-1.89 3.62 2.17 8.76 3.3 12.55 1.62.05-.25.09-.5.09-.76 0-1.43-.87-2.74-2.33-3.79Z"
                style={{
                    strokeWidth: ".48px",
                    stroke: "currentcolor",
                    strokeMiterlimit: 10,
                }}
            />
        </g>
    </svg>
)
export default SvgComponent