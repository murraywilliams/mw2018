import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './index.css'
import siteImage from '../assets/mw2018-site-image.jpg'
import favicon from '../assets/favicon-16x16.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MurrayWilliams - Freelance Developer based in Cape Town"
      meta={[
        { name: 'description', content: 'Murray Williams is a freelance developer from Cape Town, South Africa' },
        { name: 'google-site-verification', content: 'tQnl4t3y-L4yTZaa1fUjIkoFCjZc_YTINpy07Odt8U0' },
        { name: 'keywords', content: 'JavaScript, Web Development, ReactJS, Continous Deployment, Freelance Developer, Freelance Designer, Developer Cape Town' },
      ]}
      link={[
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon}`},
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
