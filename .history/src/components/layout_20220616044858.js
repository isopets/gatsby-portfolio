import * as React from "react"
import Header from "./header"
import Footer from "./footer"]

const Layout = props => {
  return (
    <Layout>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Layout>
  )
}

export default Layout
