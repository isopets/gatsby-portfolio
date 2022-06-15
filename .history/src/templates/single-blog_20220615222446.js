import * as React from "react"
import { graphql } from "gatsby"

const SingleBlog = (props) => {
  return<div></div> <h1>記事ページ</h1>
}

export default SingleBlog
export const query = graphql`
  query SingleBlogQuery {
    markdownRemark {
      frontmatter {
        excerpt
        id
        image
        title
        date
      }
      html
    }
  }
`
