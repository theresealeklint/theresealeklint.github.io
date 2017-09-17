import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import profilePic from './profile-pic.jpg';

const Container = styled.header`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const ImgWrapper = styled.div`
  width: 100px;
  margin-right: 1rem;

  img {
    border-radius: 50%;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default Header;
