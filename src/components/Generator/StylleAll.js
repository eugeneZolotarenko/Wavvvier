import styled from "styled-components"

// const wider = props => props.options.wide.value
// console.log(props => props.options.wide.value)
// const svg = `data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${
//   wider * 98.3836
// }L50 ${wider * 92.3836}C100 ${wider * 86.3836} 200 ${wider * 74.3836} 300 ${
//   wider * 50.3836
// }C400 ${wider * 26.3836} 500 ${wider * -9.61644} 600 ${wider * 2.38356}C700 ${
//   wider * 14.3836
// } 800 ${wider * 74.3836} 900 ${wider * 98.3836}C1000 ${wider * 122.384} 1100 ${
//   wider * 110.384
// } 1150 ${wider * 104.384}L1200 ${wider * 98.3836}V134.384H1150C1100 ${
//   wider * 134.384
// } 1000 ${wider * 134.384} 900 ${wider * 134.384}C800 ${wider * 134.384} 700 ${
//   wider * 134.384
// } 600 ${wider * 134.384}C500 ${wider * 134.384} 400 ${wider * 134.384} 300 ${
//   wider * 134.384
// }C200 ${wider * 134.384} 100 ${wider * 134.384} 50 ${
//   wider * 134.384
// }H0V98.3836Z' fill='%23454546'/></svg>`

export const Header = styled.header`
  height: 60vh;
  padding-top: 70px;
  background-color: lightseagreen;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: ${props => props.options.height.value}px;
    position: absolute;
    bottom: -1%;
    left: 0;
    background-size: ${props =>
      props.options.height.value < 164 ? "auto" : "cover"};
    background-repeat-y: no-repeat;
    background-position: ${props => props.options.position.value}%;
    /* background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98.3836L50 92.3836C100 86.3836 200 74.3836 300 50.3836C400 26.3836 500 -9.61644 600 2.38356C700 14.3836 800 74.3836 900 98.3836C1000 122.384 1100 110.384 1150 104.384L1200 98.3836V134.384H1150C1100 134.384 1000 134.384 900 134.384C800 134.384 700 134.384 600 134.384C500 134.384 400 134.384 300 134.384C200 134.384 100 134.384 50 134.384H0V98.3836Z' fill='%23454546'/></svg>"); */
    background-image: url("${props => props.svg}");
  }
`

export const Controllers = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 40px;
  .MuiPaper-root {
    max-width: 700px;
    min-width: 300px;
    width: 35%;
    padding: 0 15px;
  }
`

// For controls =>
// 1. height (as proparty css)
// 2. background-position
// 3. height of svg
// bonus - color
