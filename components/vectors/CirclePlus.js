import React from 'react'

export const CirclePlus = props => (
  <svg width={55} height={55} fill="none" {...props}>
    <path
      d="M20 27.5h7.5m7.5 0h-7.5m0 0V35m0-7.5V20"
      stroke="#FDB797"
      strokeWidth={2}
    />
    <circle cx={27.5} cy={27.5} r={26.5} stroke="#F5F5F5" strokeWidth={2} />
  </svg>
)
