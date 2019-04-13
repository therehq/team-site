import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { OurCustomers } from '../components/OurCustomers/OurCustomers'
import Space from '../components/shared/Space'

function Home() {
  return (
    <>
      <Header />
      <OurCustomers />
      <Space height={100} />
    </>
  )
}

export default Home
