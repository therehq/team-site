import React from 'react'

const Teammate = props => (
  <svg width={28} height={28} fill="none" {...props}>
    <path
      opacity={0.5}
      d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
      fill="url(#teammate__paint0_linear)"
    />
    {/* BG */}
    <path
      d="M14 27.63c7.57 0 13.706-6.136 13.706-13.706C27.706 6.354 21.57.216 14 .216 6.43.217.293 6.354.293 13.924.293 21.494 6.43 27.63 14 27.63z"
      fill={props.active ? `#1C84FF` : `#C9D7E7`}
    />
    <path
      d="M14 27.63c7.57 0 13.706-6.136 13.706-13.706C27.706 6.354 21.57.216 14 .216 6.43.217.293 6.354.293 13.924.293 21.494 6.43 27.63 14 27.63z"
      fill="url(#teammate__paint1_linear)"
    />

    {/* Shirt */}
    <path
      d="M14.038 27.67c2.677.005 5.297-.78 7.532-2.254-.505-2.759-2.428-2.932-2.428-2.932H8.546s-1.815.15-2.38 2.689a13.642 13.642 0 0 0 7.872 2.498z"
      fill={props.active ? `#C9D7E7` : `#1C84FF`}
    />
    <path
      d="M13.894 21.015a6.075 6.075 0 1 0 0-12.15 6.075 6.075 0 0 0 0 12.15z"
      fill="#FFD5D5"
    />
    <path
      d="M5.955 9.643c.82-1.73 1.78-2.628 3.61-3.225 1.172-.38 2.607-1.124 3.775-.733.57.186 1.775.146 3.372 1.465 1.172.97 1.7 1.808 2.345 3.226.61 1.34.587 2.343.88 3.664-.53-1.963-1.007-2.952-2.709-4.196-1.745-.535-4.136-1.061-5.06-.495-1.258.77-2.17 1.06-2.047 2.521.054.475.159.943.313 1.396.482 1.669-.795 4.324.081 5.827.325.537 1.962 1.568 2.532 1.837.276.123 1.603.132 1.905.147 1.248.088 3.214-.95 3.519-2.155.684.631.878.54 1.308 1.364.282.54.163 1.227-.18 1.732-.37.49-.867.873-1.439 1.104-1.566.712-3.367.777-5.068.508-.756-.12-1.503-.303-2.266-.366a.466.466 0 0 0-.31.049.465.465 0 0 0-.146.24c-.46 1.33-.732 1.837-.804 3.241l-3.899-2.256 1.04-1.619c.22-.34.505-.718.91-.722-.206-.416-.714-.568-1.083-.852a1.708 1.708 0 0 1-.58-1.797c.104-.342.315-.641.44-.976.358-.954-.025-2.005-.376-2.964l-.01-.028c-.448-1.228-.838-2.521-.704-3.82.082-.697.34-1.487.65-2.117z"
      fill="#EFF4FF"
    />
    <defs>
      <linearGradient
        id="teammate__paint0_linear"
        x1={9032.8}
        y1={9987.86}
        x2={9032.8}
        y2={7313.86}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="teammate__paint1_linear"
        x1={14}
        y1={0.217}
        x2={14.547}
        y2={14.472}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.13} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default Teammate