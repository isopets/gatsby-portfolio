const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
        const { createNodeField } = actions
        if (node.internal.type === `MarkdownRemark`) {
            const slug = createFilePath({ node, getNode })
            createNodeField({

                    node, // 追加
                    name: `slug`, // 追加
                    value: slug, // 追加
                }
            }