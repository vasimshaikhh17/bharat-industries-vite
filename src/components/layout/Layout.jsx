import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import Header2 from '../common/Header/Header2'
import Header3 from '../common/Header/Header3'

const Layout = ({children}) => {
  return (
    <>
        {/* <Header/> */}
        <Header2/>
        {/* <Header3/> */}
        {children}
        <Footer/>
    </>
  )
}

export default Layout