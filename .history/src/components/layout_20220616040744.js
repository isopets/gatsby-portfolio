import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.child}</main>
      <Footer />
    </>
  )
}

export default Layout
