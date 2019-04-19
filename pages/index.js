import React from 'react'

import { Header } from '../components/Header'
import { OurCustomers } from '../components/OurCustomers/OurCustomers'
import { Screenshots } from '../components/screenshots/Screenshots'
import { Scheduling } from '../components/scheduling/Scheduling'
import Space from '../components/shared/Space'

function Home() {
  return (
    <>
      <Header />
      <OurCustomers />
      <Screenshots />
      <Scheduling />
      <Space height={100} />
    </>
  )
}

export default Home
