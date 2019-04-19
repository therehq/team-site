import React from 'react'

export const Story = props => (
  <svg width={28} height={28} fill="none" {...props}>
    <circle cx={14} cy={14} r={14} fill="#1C84FF" />
    <circle cx={14} cy={14} r={14} fill="url(#Story__paint0_linear)" />
    <path
      d="M4.48 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      fill="#fff"
    />
    <path
      d="M4.48 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      stroke="#2243F3"
    />
    <path
      d="M21.28 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      fill="#fff"
    />
    <path
      d="M21.28 8.96a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      stroke="#2243F3"
    />
    <path
      d="M13.44 23.52a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      fill="#fff"
    />
    <path
      d="M13.44 23.52a1.12 1.12 0 1 1 2.24 0 1.12 1.12 0 0 1-2.24 0z"
      stroke="#2243F3"
    />
    <rect
      x={4.36}
      y={11.08}
      width={10.32}
      height={10.32}
      rx={5.16}
      fill="#fff"
      stroke="#1C84FF"
      strokeWidth={2}
    />
    <rect
      x={8.84}
      y={4.359}
      width={10.32}
      height={10.32}
      rx={5.16}
      fill="#fff"
      stroke="#1C84FF"
      strokeWidth={2}
    />
    <path
      d="M13.32 16.24a5.16 5.16 0 1 1 10.32 0 5.16 5.16 0 0 1-10.32 0z"
      fill="#fff"
      stroke="#1C84FF"
      strokeWidth={2}
    />
    <defs>
      <linearGradient
        id="Story__paint0_linear"
        x1={11.2}
        y1={0.56}
        x2={14.56}
        y2={10.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.13} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
