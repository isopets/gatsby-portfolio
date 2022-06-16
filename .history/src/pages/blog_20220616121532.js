import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="ブログ" description="これはブログページです" />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {data.allMarkdownRemark.edges.map((singleBlog, index) => {
            const { title, date, excerpt, image } = singleBlog.node.frontmatter
            const { slug } = singleBlog.node.fields
            const img = getImage(image.childImageSharp.gatsbyImageData)
            return (
            <div className={style.blogCard} key={index}>
              <div className={style.textContainer}>
                <h3>{singleBlog.node.frontmatter.title}</h3>
                <p>{singleBlog.node.frontmatter.excerpt}</p>
                <p>{singleBlog.node.frontmatter.date}</p>
                <Link to={"/blog${singleBlog.node.fields.slug}"}>
                  Read More
                </Link>
              </div>
              <GatsbyImage
                image={
                  singleBlog.node.frontmatter.image.childImageSharp
                    .gatsbyImageData
                }
                alt="card-image"
                className={style.cardImg}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            excerpt
            id
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
