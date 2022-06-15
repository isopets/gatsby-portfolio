import { graphql } from "gatsby"
import * as React from "react"

const Blog = (props) => {
    
  return <h1>ブログページ</h1>
}

export default Blog
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            excerpt
            id
            image
            title
          }
        }
      }
    }
  }
`
