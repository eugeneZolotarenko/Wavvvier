const wave = (svg, height, position) => `
  content: "";
  width: 100%;
  height: ${height}px;
  position: absolute;
  bottom: -0.3%;
  left: 0;
  background-size: auto;
  background-repeat: repeat no-repeat;
  background-position: ${position}vw bottom;
  background-image: url("${svg}");
`

const container = color => `
  height: 40vh;
  background-color: ${color};
  position: relative;
`

const responsiveWave = height => `
    height: ${height * 0.5}px
`

const cssClassContainer = "wave-container"

// Code for styled components

export const WaveContainer = (options, svg, containerColor) => `
  ${container(containerColor)}
  &::before {
    ${wave(svg, options.height.value, options.position.value)}
    @media(max-width:850px) {
      ${responsiveWave(options.height.value)}
    }
  }
`

//

// Code for users

// prettier-ignore

export const VanillaCSSWaveCode = (options, svg, containerColor) => `\
.${cssClassContainer} {\
  ${container(containerColor)}\
}

.${cssClassContainer}::before { \
  ${wave(svg, options.height.value, options.position.value)}\
}

@media(max-width:850px) {
  .wave-container::before {\
    ${responsiveWave(options.height.value)}\
  }  
}`

export const HtmlWaveCode = `\
 <div class="${cssClassContainer}"></div>
`

//
