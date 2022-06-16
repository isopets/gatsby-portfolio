import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Blog = props => {
  return (
    <>
      <div>
        <div>
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
            <div key={index}>
              <div>
                <h3>{singleBlog.node.frontmatter.title}</h3>
                <p>{singleBlog.node.frontmatter.excerpt}</p>
                <p>{singleBlog.node.frontmatter.date}</p>
                <Link to={singleBlog.node.fields.slug}>Read More</Link>
              </div>
              <GatsbyImage
                image={
                  singleBlog.node.frontmatter.image.childImageSharp
                    .gatsbyImageData
                }
                alt="card-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            excerpt
            id
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                  placeholder: BLURRED
                )
              }
            }
            title
          }
        }
      }
    }
  }
`
