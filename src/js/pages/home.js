import React from 'react'
import { hero2, galeriaObj, aboutObj } from '../components/data'
import { GaleryHome } from '../components/GaleryHome'
import { HeroSection } from '../components/HeroSection'
import { Jumbotron10 } from '../components/Jumbotron10'


export const Home = () => {
  return (
    <>
      <Jumbotron10 />
      <GaleryHome {...galeriaObj} />
      <HeroSection {...aboutObj} />
    </>
  )
}
