import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost, { BlogPostTemplate } from '../templates/blog-post.js'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="frontpage-hero hero is-bold is-info is-medium has-background">
        <img alt="Archipelago" className="hero-background is-transparent" src="img/img_20210610_182834.jpg"/>
          <div className="container">
            <div className="hero-body has-text-centered">
              <h1 className="title has-text-white is-bold is-size-1">Aboa Turku</h1>
              <h2 className="subtitle has-text-white is-size-2">iGEM 2021 Team</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" align="center">
            <img src="/img/aboa-team-21.png"/>
          </div>
        </section>
        <section>
          {/*<div className="container">
            <div className="content has-text-centered">
              <h1 className="has-text-weight-bold is-size-2">Project 2021</h1>
            </div>
          </div>*/}
          <div className="container mb-3">
            {posts
              .map(({ node: post }) => (
                <div
                  className="content blogpost"
                  style={{padding: '2em 4em' }}
                  key={post.id}
                >
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
        <section className="section">
          <div className="container">
          <figure className="image is-16by9" align="center" height="500">
          <iframe 
            class="has-ratio"
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/_8Sb6X2NXUQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
          </figure>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
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

/*
<section className="hero is-info is-bold">
          <div className="container">
            <div className="hero-body">
              <h1 className="title">Contact Us</h1>
              <h2 className="subtitle">foo.bar@example.com</h2>
            </div>
          </div>
        </section>

*/