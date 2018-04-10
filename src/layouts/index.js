import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './index.css'
import siteImage from '../assets/mw2018-site-image.jpg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MurrayWilliams - Freelance Developer based in Cape Town"
      meta={[
        { name: 'description', content: 'Murray Williams is a freelance developer from Cape Town, South Africa' },
        { name: "google-site-verification" },
        { name: 'keywords', content: 'JavaScript, Web Development, ReactJS, Continous Deployment, Freelance Developer, Freelance Designer, Developer Cape Town' },
      ]}
      link={[
        {rel: 'image_src', href: `${siteImage}`}
      ]}
    />
    <link rel="image_src" href={siteImage} / >
    <Header />
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

const Wrapper = styled.div`

`
