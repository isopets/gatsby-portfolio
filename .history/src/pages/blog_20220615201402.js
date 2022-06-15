import { graphql } from "gatsby"
import * as React from "react"

const Blog = props => {
  console.log(props)
  return <h1>ブログページ</h1>
  {
    props.
  }
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
