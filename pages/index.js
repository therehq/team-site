import React from 'react'

import Space from '../components/shared/Space'
import { Header } from '../components/Header'
import { OurCustomers } from '../components/OurCustomers/OurCustomers'
import { Screenshots } from '../components/screenshots/Screenshots'
import { Scheduling } from '../components/scheduling/Scheduling'
import { Features } from '../components/Features'
import { PeopleAvatars } from '../components/PeopleAvatars'
import { Quotes } from '../components/Quotes'
import { TeamStory } from '../components/TeamStory'
import { Features2 } from '../components/Features2'
import { Press } from '../components/Press'
import { OurBlog } from '../components/OurBlog'
import { LastQuote } from '../components/LastQuote'
import { Footer } from '../components/footer'

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
      <TeamStory />
      <Features2 />
      <Press />
      <OurBlog />
      <LastQuote />
      <Footer />

      <Space height={30} />
    </>
  )
}

export default Home
