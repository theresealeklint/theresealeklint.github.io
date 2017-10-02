import React from 'react';
import Link from 'gatsby-link';
import normalize from 'normalize.css';
import Header from '../components/Header';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import { Grid as _Grid } from 'react-styled-flexboxgrid';

injectGlobal`
  body {
    font-family: "Lora", "Times New Roman", "serif";
    color: ${theme.colorGray};
    font-size: 1.125rem;
    line-height: 1.6;
    padding-bottom: 2rem;
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

  p {
    margin: 1.5rem 0;
  }

  blockquote {
    font-size: 1.375rem;
    color: ${theme.colorGrayLight};
    font-style: italic;
    margin: 3rem 1.5rem;

    @media screen and (min-width: 768px) {
      margin: 3rem;
    }

    footer {
      font-size: 1rem;
      font-style: italic;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Grid = styled(_Grid)`
  padding-left: ${p => p.theme.flexboxgrid.outerMargin}rem;
  padding-right: ${p => p.theme.flexboxgrid.outerMargin}rem;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Grid>{children()}</Grid>
          </div>
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
