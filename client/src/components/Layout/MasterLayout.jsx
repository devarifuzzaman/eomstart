import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MasterLayout = ({children}) => {
  return (
    <>
        <Header />
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default MasterLayout;