import React from 'react'
import Head from 'next/head'
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
    <>
      <Head>
        <meta name="title" content="There: Clearer, smoother remote work" />
        <meta
          name="description"
          content="Beyond traditional remote working. There solves scheduling and collaboration across timezones. Request early access for your distributed team."
        />
        <meta charSet="utf-8" />
      </Head>
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
    </>
  )
}

export default Home
