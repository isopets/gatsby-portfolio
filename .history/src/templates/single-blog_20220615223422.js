import * as React from "react"
import { graphql } from "gatsby"

const SingleBlog = (props) => {     // 追加
    return (
        <div>                       // 追加
            <h1>記事ページ</h1>
            {console.log(props)}    // 追加
        </div>                      // 追加
    )
}

export default SingleBlog

export const query = graphql`
    query SingleBlogQuery {
        markdownRemark {
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