import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feeds from '../components/Feeds'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row">
        <Sidebar />
        <Feeds />
      </main>
    </div>
  )
}

export default Home
