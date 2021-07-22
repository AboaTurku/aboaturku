import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { HTMLContent } from '../../components/Content'
import { BlogPostTemplate } from '../../templates/blog-post'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <div
                  className="content blogpost"
                  style={{padding: '2em 4em' }}
                  key={post.id}
                >
                  <h1 className="is-bold">
                    {post.frontmatter.title}
                  </h1>
                  <p>
                    <BlogPostTemplate 
                        content={post.html}
                        contentComponent={HTMLContent}
                    ></BlogPostTemplate>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, title: {eq: "Project 2021"} }}
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
