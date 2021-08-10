import styled from "styled-components"

export const HeaderStyles = styled.nav`
  max-height: ${props => props.theme.headerHeight};
  padding: 15px 3%;
  background-color: ${props => props.theme.seashell};
  border-bottom: 2px solid ${props => props.theme.lightseagreen};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  .logo {
    margin: 0;
    a {
      color: #20b2aa;
    }
  }
`

export const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: ${props => props.theme.footerHeight};
  padding: 10px;
  border-top: 2px solid ${props => props.theme.lightseagreen};
  background-color: ${props => props.theme.seashell};
  flex-wrap: wrap;

  a {
    margin-left: 5px;
  }

  @media (max-width: 360px) {
    font-size: 1.45rem;
  }
`
