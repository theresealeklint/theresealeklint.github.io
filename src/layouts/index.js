import React from 'react';
import Link from 'gatsby-link';
import normalize from 'normalize.css';
import Header from '../components/Header';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import { Grid } from 'react-styled-flexboxgrid';

injectGlobal`
  body {
    color: ${theme.colorGray};
    font-size: 1.125rem;
    line-height: 1.5;
  }

  h1, h2, h3 {
    line-height: 1.15;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    font-size: 1.5rem;
    color: ${theme.colorGrayLight};

    footer {
      font-size: 1.125rem;
      font-style: italic;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700"
          rel="stylesheet"
        />
        <ThemeProvider theme={theme}>
          <Grid>
            <div>
              <Header />
              {children()}
            </div>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
