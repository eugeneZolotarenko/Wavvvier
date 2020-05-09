export const WaveContainer = (options, svg) => `
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
    background-repeat: repeat no-repeat;
    background-position: ${options.Position.value}vw bottom;
    background-image: url("${svg}");
  }
`

const cssClassWaveContainer = "wave-container"

export const VanillaCSSWaveCode = (options, svg) => `
  .${cssClassWaveContainer} {
    height: 50vh;
    background-color: lightseagreen;
    position: relative;
  }
  .${cssClassWaveContainer}::before {
    content: "";
    width: 100%;
    height: ${options.Height.value}px;
    position: absolute;
    bottom: -0.1%;
    left: 0;
    background-size: auto;
    background-repeat: repeat no-repeat;
    background-position: ${options.Position.value}vw bottom;
    background-image: url("${svg}");
  }
`

export const HtmlWaveCode = `
 <div class="${cssClassWaveContainer}"></div>
`
