import * as React from 'react'
import { graphql } from 'gatsby'
import CookingGIF from 'images/cooking.gif'
import Bio from 'components/bio'
import Layout from 'components/layout'
import Seo from 'components/seo'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={'learnings'}>
            <Seo title="learnings" />
            <Bio />

            <hr />

            <div
                style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    flex: '1',
                    flexDirection: 'column',
                }}>
                <h4>Something good is cooking 😋</h4>
                <p>please be patient 😌 </p>
                <div style={{ fontSize: '100px' }}>
                    <img src={CookingGIF} alt="cooking gif" />
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`
