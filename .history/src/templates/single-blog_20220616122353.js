import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleBlog = ({ data }) => {
  const { title, date, excerpt, image } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark // 追加
  const img = getImage(image.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <GatsbyImage image={img} alt="blog-image" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{title}</h1>
          <p>{date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
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
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 90
              width: 1000
            )
          }
        }
      }
      html
    }
  }
`
