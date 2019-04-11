import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

import iglogo from '../img/iglogo.png'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div className="body-content">
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-touch-icon-152x152.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div className="main-content">{children}</div>
        <footer className="footer">
          <nav className="level">
            <div className="level-left">
              <div className="level-item has-text-centerd">
                <div>
                  <h1 className="title is-spaced has-text-white">Contact Us</h1>
                  <h1 className="subtitle has-text-white">
                    <a className="email" href="mailto:turkuigem@gmail.com">turkuigem@gmail.com</a>
                  </h1>
                </div>
              </div>
              <div className="level-item has-text-centerd">
                <div>
                  <a href="https://instagram.com/igem.aboa" className="social-link" title="Follow us on Instagram">
                    <img src={iglogo} alt="AboaTurku" style={{ width: '64px' }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="level-right">
              
            </div>
          </nav>
        </footer>
      </div>
    )}
  />
)

export default TemplateWrapper

/*
<div className="level-item">
  <a href="https://www.utu.fi/" alt="University of Turku" title="University of Turku">
    <figure className="image" style={{maxWidth: "256px"}}>
      <img src="/img/utu.png" alt="University of Turku logo"/>
    </figure>
  </a>
</div>
<div className="level-item">
  <a href="https://www.abo.fi/" alt="Åbo Akademi" title="Åbo Akademi">
    <figure className="image" style={{maxWidth: "256px"}}>
      <img src="/img/abo.png" alt="Åbo Akademi logo"/>
    </figure>
  </a>
</div>
<div className="level-item has-text-centerd">
                <h1 className="title has-text-white">Sponsori</h1>
              </div>
              <div className="level-item has-text-centerd">
                <h1 className="title has-text-white">Sponsori</h1>
              </div>
              <div className="level-item has-text-centerd">
                <h1 className="title has-text-white">Sponsori</h1>
              </div>
              <div className="level-item has-text-centerd">
                <h1 className="title has-text-white">Sponsori</h1>
              </div>
*/