import React from 'react'
import Nav from './components/Nav'
import Hero from './views/Hero'
import Launchpad from './views/Launchpad'
import Rocket from './views/Rocket'
import NFT from './views/NFT'
import Partnership from './views/Partnership'
import Future from './views/Future'
import Footer from './views/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Rocket />
      <Launchpad />
      <NFT />
      <Partnership />
      <Future />
      <Footer />
    </>
  )
}

export default App