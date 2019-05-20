import React from 'react'

const TeamHome = props => (
  <svg width={28} height={28} fill="none" {...props}>
    <circle
      cx={14}
      cy={14}
      r={14}
      fill={props.active ? `#1C84FF` : `#C9D7E7`}
    />
    <circle cx={14} cy={14} r={14} fill="url(#prefix__paint0_linear)" />
    <path
      d="M4.48 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 1 1-2.24 0zM21.28 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 1 1-2.24 0zM13.44 22.52a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      fill="#fff"
    />
    <rect
      x={4.36}
      y={11.08}
      width={10.32}
      height={10.32}
      rx={5.16}
      fill={props.active ? `#fff` : `#fff`}
      stroke={props.active ? `#1C84FF` : `#C9D7E7`}
      strokeWidth={2}
    />
    <rect
      x={8.84}
      y={4.359}
      width={10.32}
      height={10.32}
      rx={5.16}
      fill={props.active ? `#fff` : `#fff`}
      stroke={props.active ? `#1C84FF` : `#C9D7E7`}
      strokeWidth={2}
    />
    <path
      d="M13.32 16.24a5.16 5.16 0 1 1 10.32 0 5.16 5.16 0 0 1-10.32 0z"
      fill={props.active ? `#fff` : `#fff`}
      stroke={props.active ? `#1C84FF` : `#C9D7E7`}
      strokeWidth={2}
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={14}
        y1={0}
        x2={14.559}
        y2={14.56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.13} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default TeamHome
