import React from 'react'
import { createClient, Provider } from 'urql'

import { ModalProvider } from '../components/modal/Context'
import Space from '../components/shared/Space'
import { Header } from '../components/Header'
import { OurCustomers } from '../components/our-customers'
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
import { ThereNews } from '../components/ThereNews'

const client = createClient({
  url:
    process.env.NODE_ENV == 'production'
      ? 'https://subscribers.api.there.team/graphql'
      : 'http://localhost:3001/graphql'
})

const Home = () => {
  return (
    <Provider value={client}>
      <ModalProvider>
        <ThereNews />
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

        <Space height={86} />
      </ModalProvider>
    </Provider>
  )
}

export default Home
