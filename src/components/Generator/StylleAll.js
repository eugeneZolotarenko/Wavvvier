import styled from "styled-components"

export const Header = styled.header`
  height: 60vh;
  background-color: lightseagreen;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 124px;
    position: absolute;
    bottom: -1%;
    left: 0;
    background-size: auto;
    background-repeat-y: no-repeat;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98.3836L50 92.3836C100 86.3836 200 74.3836 300 50.3836C400 26.3836 500 -9.61644 600 2.38356C700 14.3836 800 74.3836 900 98.3836C1000 122.384 1100 110.384 1150 104.384L1200 98.3836V134.384H1150C1100 134.384 1000 134.384 900 134.384C800 134.384 700 134.384 600 134.384C500 134.384 400 134.384 300 134.384C200 134.384 100 134.384 50 134.384H0V98.3836Z' fill='%23FFF'/></svg>");
  }
`
