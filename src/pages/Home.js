import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import Huaxing from '../components/Huaxing'

export default function Home() {
  var price_val=1000
  return (
  <>
  <Hero>  
    <Banner title="luxurious rooms" subtitle="delux rooms starting at " price={price_val}>

        <Huaxing beauty="100"/>
      <Link to='/rooms' className='btn-primary'>
        our rooms
      </Link>

    </Banner>
  </Hero>
  <Services />
  </>
  )
}
