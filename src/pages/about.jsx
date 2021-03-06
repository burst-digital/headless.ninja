import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import site from '../../content/site.yml';

import MainHeader from '../components/Layout/Header';

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
`;

class AboutPage extends React.Component {
  render() {
    return (
      <main>
        <Helmet title={`About ${site.title}`} />
        <MainHeader />
        <BodyContainer>
          {"This page isn't complete yet. Please check back in a few weeks!"}
        </BodyContainer>
      </main>
    );
  }
}

export default AboutPage;
