import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { withTheme } from 'styled-components';
import Link from 'gatsby-link';

import site from '../../content/site.yml';
import * as screenshots from '../../content/screenshots';
import homepage from '../../content/homepage.yml';
import AnimatedLogo from '../components/AnimatedLogo';
import Header from './Home/Header';
import DrupalStarsCount from '../components/DrupalStarsCount';
import Button from '../components/Button';
import Title from './Home/Title';

// styled
import Container from './Home/Container';
import TagLine from './Home/styled/TagLine';
import Heading from '../components/Layout/Typography/Heading';
import ShortExplanationBody from './Home/styled/ShortExplanationBody';
import { getGradient } from '../layouts/theme';
import Example from './Home/Example';
import FeatureList from './Home/Feature/styled/List';
import Feature from './Home/Feature';

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet title={`Headless Ninja - ${site.description}`} />
        <Header />
        <main>
          <Container background={this.props.theme.backgroundGrey}>
            <Title title={site.title} />
            <AnimatedLogo />
            <TagLine color="#fff">{site.description}</TagLine>
            {homepage.cta.map(({ to, label }) => (
              <Button
                to={to}
                bgColor={this.props.theme.backgroundGrey}
                textColor="#fff"
              >
                {label}
              </Button>
            ))}
          </Container>

          <Container>
            <Heading>{homepage.short_explanation.heading}</Heading>
            <ShortExplanationBody>
              {homepage.short_explanation.body}
            </ShortExplanationBody>
            <Button to={homepage.short_explanation.cta.to} bgColor="#fff">
              {homepage.short_explanation.cta.label}
            </Button>
          </Container>

          <Container background={getGradient(this.props.theme.gradientMild)}>
            <Heading color="#fff" marginBottom={60}>
              {homepage.features.title}
            </Heading>

            <FeatureList>
              {homepage.features.content.map(feature => (
                <Feature key={feature.title} {...feature} />
              ))}
            </FeatureList>
            <Button to={homepage.features.cta.to} secondary>
              {homepage.features.cta.label}
            </Button>
          </Container>

          <Container>
            <h2>{homepage.examples.title}</h2>

            <p>{homepage.examples.introduction}</p>
            {homepage.examples.content.map(({ link, title, screenshot }) => (
              <Link
                to={link}
                style={{
                  display: 'inline-block',
                  width: '30%',
                  margin: '0 1%',
                }}
                target="_blank"
              >
                <h3>{title}</h3>
                <img
                  src={screenshots[screenshot]}
                  width="100%"
                  alt={`Screenshot of ${link}`}
                />
              </Link>
            ))}
          </Container>

          <Container>
            <h4>{homepage.like_incentive}</h4>
            <iframe
              title="Github stars"
              src={`https://ghbtns.com/github-btn.html?user=${
                site.projects.github.hn.user
              }&repo=${site.projects.github.hn.repo}&type=star&count=true`}
              frameBorder="0"
              scrolling="0"
              width="80px"
              height="20px"
            />
            <Link to="https://www.drupal.org/project/hn" target="_blank">
              <DrupalStarsCount />
            </Link>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default withTheme(Index);
