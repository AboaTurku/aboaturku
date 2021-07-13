import React from 'react';
import Layout from '../../components/Layout';
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import ProfileCard from '../../components/ProfileCard'
import Content, {HTMLContent} from '../../components/Content'


const TeamPage = ({data: {allMarkdownRemark: {edges}}}) => {
    return (
        <Layout>
            <Helmet title="Aboa - Team" />    
            <section className="section">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            Aboa Team 2021
                        </h2>
                        <p>
                          In 2021, the Aboa team is comprised of students of several disciplines. We are enthusiastic about participating in research
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
  query Profiles21Query {
    allMarkdownRemark(filter: {frontmatter: {teamYear: {eq: 2021}, templateKey: {eq: "profile"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 300, cropFocus: NORTH) {
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