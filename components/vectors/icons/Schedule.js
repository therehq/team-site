import React from 'react'

export const Schedule = props => (
  <svg width={28} height={28} fill="none" {...props}>
    <circle cx={14} cy={14} r={14} fill="#C9D7E7" />
    <circle cx={14} cy={14} r={14} fill="url(#prefix__paint0_linear)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.011 13.44c.046-1.162.233-2.287.545-3.36H11.2v3.36H.011zm27.054 5.6c.41-1.063.695-2.19.835-3.36H12.32v3.36h14.745zm-14.745-5.6h10.2a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-1-1h-10.2v3.36zm-1.12 2.24H4.36a1 1 0 0 0-1 1v1.36a1 1 0 0 0 1 1h6.84v-3.36z"
      fill="#fff"
    />
    <path
      d="M10.667 6.188c-.63-.63-.184-1.708.707-1.708h4.132c.89 0 1.337 1.078.707 1.708l-1.36 1.36a1 1 0 0 0-.293.707V23.64a1 1 0 0 1-1 1h-.24a1 1 0 0 1-1-1V8.255a1 1 0 0 0-.293-.707l-1.36-1.36z"
      fill="#8AA4FF"
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
