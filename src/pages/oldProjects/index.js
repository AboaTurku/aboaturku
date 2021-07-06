import React from 'react';
import Layout from '../../components/Layout';
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Partner from '../../components/Partner';
import '../../components/partners.sass';
import { Link } from 'gatsby'

const OldProjectsPage = () => {
    return (
        <Layout>
            <section className="section">
                <Helmet title="Aboa - Partners" />
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            Previous Team Aboa -projects
                        </h2>
                        <p>
                        <Link className="button is-medium" to="/team2019">
                        Year 2019
                        </Link>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default OldProjectsPage;