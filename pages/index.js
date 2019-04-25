import React from 'react'

import { Header } from '../components/Header'
import { OurCustomers } from '../components/OurCustomers/OurCustomers'
import { Screenshots } from '../components/screenshots/Screenshots'
import { Scheduling } from '../components/scheduling/Scheduling'
import { Features } from '../components/Features'
import { PeopleAvatars } from '../components/PeopleAvatars'
import { Quotes } from '../components/Quotes'
import Space from '../components/shared/Space'

function Home() {
  return (
    <>
      <Header />
      <OurCustomers />
      <Screenshots />
      <Scheduling />
      <Features />
      <PeopleAvatars />
      <Quotes />
      <Space height={100} />
    </>
  )
}

export default Home
