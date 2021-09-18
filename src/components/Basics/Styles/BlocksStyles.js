import styled from 'styled-components';

export const HeaderStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: ${(props) => props.theme.headerHeight};
  padding: 15px 3%;
  background-color: ${(props) => props.theme.seashell};
  border-bottom: 2px solid ${(props) => props.theme.lightseagreen};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  .logo {
    margin: 0;
    a {
      color: ${(props) => props.theme.lightseagreen};
    }
  }

  .github-link {
    color: ${(props) => props.theme.pinky};
    font-weight: 500;
  }
`;

export const FooterStyles = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-top: 2px solid ${(props) => props.theme.lightseagreen};
  background-color: ${(props) => props.theme.seashell};
  flex-wrap: wrap;

  a {
    margin-left: 5px;
    font-weight: 500;
    color: ${(props) => props.theme.pinky};
  }

  @media (max-width: 360px) {
    font-size: 1.45rem;
  }
`;
