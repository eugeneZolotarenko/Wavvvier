const WaveContainer = (options, svg) => `
  height: 50vh;
  background-color: lightseagreen;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: ${options.Height.value}px;
    position: absolute;
    bottom: -0.1%;
    left: 0;
    background-size: auto;
    background-repeat-y: no-repeat;
    background-position: ${options.Position.value}vw bottom;
    background-image: url("${svg}");
  }
`

export default WaveContainer
