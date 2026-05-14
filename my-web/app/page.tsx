import React from 'react'
import Image from 'next/image'

const page = () => {
  return <main className='main-container'>
      <section className='home-grid'>
          <div id="coin-overview">
              <div className='header pt-2'>
                  <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin" width={50} height={50}></Image>
                  <div className='infor'>
                      <p>Bitcoin / BTC</p>
                      <h1>$89,33</h1>
                  </div>
              </div>
          </div>

          <p>Trending Coins</p>

      <section className='w-full mt-7 space-y-4'>
        <p>Categories</p>
      </section>
      </section>
  </main>
}

export default page