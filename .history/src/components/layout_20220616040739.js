import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props}</main>
      <Footer />
    </>
  )
}

export default Layout
