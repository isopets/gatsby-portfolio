import * as React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
        <div>
            <div>
                <h1>I'm Abe Hiroki!</h1>
                <h3>JavaScript Developer</h3>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <h2>JavaScript Nerd</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div>
                <h2>Skills</h2>
                <div>
                    <div><span>JavaScript / 10 years</span></div>
                    <div><span>React / 5 years</span></div>
                    <div><span>Gatsby / 3 years</span></div>
                    <div><span>Next.JS / 3 years</span></div>
                </div>
            </div>
            <div>
                <Link to="/contact">Make It Happen!</Link>
            </div>
        </div>
    </>
  )
}

export default Index
