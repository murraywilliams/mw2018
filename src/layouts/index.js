import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MurrayWilliams - Freelance Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="text" name="number" />
      <input type="email" name="email" />
    </form>
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
