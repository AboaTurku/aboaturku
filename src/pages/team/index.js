import React from 'react';
import Layout from '../../components/Layout';
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import ProfileCard from '../../components/ProfileCard'
import {HTMLContent} from '../../components/Content'

const TeamPage = ({data: {allMarkdownRemark: {edges}}}) => {
    return (
        <Layout>
            <section className="section">
                <Helmet title="Aboa - Team" />
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            Aboa Team
                        </h2>
                        <p>
                          The Aboa team is comprised of studets of several disciplines. We are enthusiastic about participating in research
                          to develop the next generation of biotechnical innovation.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor profiles">
                        {edges.map(
                            ({node: {id, html, frontmatter : {name, profilePicture}}}) => (
                                <div key={id} className="tile is-parent is-4 profile-wrapper">
                                <ProfileCard 
                                    name={name}
                                    description={html}
                                    profilePicture={profilePicture}
                                    renderComponent={HTMLContent}
                                />
                                </div>
                            )
                        )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TeamPage;


export const pageQuery = graphql`
  query ProfilesQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "profile"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`