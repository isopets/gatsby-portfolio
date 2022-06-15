import * as React from "react"
import { graphql } from "gatsby"

const SingleBlog = (props) => {
  return<div> <h1>記事ページ</h1></div>
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
