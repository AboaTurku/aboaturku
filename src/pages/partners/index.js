import React from 'react';
import Layout from '../../components/Layout';
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Partner from '../../components/Partner';
import '../../components/partners.sass';

const PartnerPage = ({data: {allMarkdownRemark: {edges}}}) => {
    return (
        <Layout>
            <section className="section">
                <Helmet title="Aboa - Partners" />
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            Partners
                        </h2>
                        <p>
                          We are thankful to our partners who have enabled us to take on this amazing project.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor partners">
                        {edges.map(
                            ({node: {id, frontmatter : {name, logo, link}}}) => (
                                <div key={id} className="tile is-parent partner-wrapper">
                                    <Partner name={name} logo={logo} link={link} />
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

export default PartnerPage;


export const pageQuery = graphql`
  query PartnersQuery {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "partner"}, teamYear: {eq: 2021}}},
      sort: {fields: [frontmatter___sortorder], order: ASC}
      ) {
      edges {
        node {
          id
          frontmatter {
            name
            logo {
                childImageSharp {
                    fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                    }
                }
                publicURL
            }
            link
          }
        }
      }
    }
  }
`
