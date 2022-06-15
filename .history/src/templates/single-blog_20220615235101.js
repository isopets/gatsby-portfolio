import * as React from "react"
import { graphql } from "gatsby"

const SingleBlog = props => {
  return (
    <>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1> // 追加
      <p>{props.data.markdownRemark.frontmatter.date}</p>
    </>
  )
}

export default SingleBlog

export const query = graphql`
  query SingleBlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        excerpt
        id
        image
        title
      }
      html
    }
  }
`
