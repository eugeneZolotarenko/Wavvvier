import styled from "styled-components"

export const HeaderStyles = styled.nav`
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
  }
`

export const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
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
