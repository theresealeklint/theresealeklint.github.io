import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import profilePic from './profile-pic.jpg';

const Container = styled.header`
  margin-bottom: 3rem;
  background-color: ${p => p.theme.colorGrayVeryLight};

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const ImgWrapper = styled.div`
  width: 100px;
  margin-right: 1.5rem;

  img {
    border-radius: 50%;
    vertical-align: middle;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Grid fluid>
          <Flex>
            <ImgWrapper>
              <Link to={'/'}>
                <img src={profilePic} alt={`Therése Äleklint`} />
              </Link>
            </ImgWrapper>
            <div>
              <Link to={'/'}>
                <H1>Therése Äleklint</H1>
                Böcker, ord, litteratur
              </Link>
            </div>
          </Flex>
        </Grid>
      </Container>
    );
  }
}

export default Header;
