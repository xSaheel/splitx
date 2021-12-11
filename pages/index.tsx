import Head from 'next/head'
import HomePage from '../src/components/homepage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Split-X</title>
        <meta name="description" content="Split your bills Hassle-Free! Go Split-X" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
