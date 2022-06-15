import * as React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link to="/contact">Contactページに移動</Link>
    </>
  )
}

export default Index
