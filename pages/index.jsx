import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abner Development, Project Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Hero  />
      </main>

    </div>
  )
}
