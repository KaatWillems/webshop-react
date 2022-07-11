import React from 'react'
import Featuredblocks from '../Features/Featuredblocks'
import Productsdresses from '../Productpages/Productsdresses'
import Headerhome from './Headerhome'
import Product from '../Productpages/Product'
import FeaturedCollection from './FeaturedCollection'
import About from './About'

function Home(props) {
 


  return (
    <>
    <Headerhome />
    <Featuredblocks />
    <FeaturedCollection products={props.products}/>
    <About />

    
    
    </>
  )
}

export default Home