import React, { useState } from "react"
import { variables } from "./../Basics/Styles/GlobalStyles"
import Controllers from "./components/Controllers"
import Intro from "./components/Intro"
import { createSVGs } from "./helpers/createSVGs"
import * as S from "./styles/StyleAll"

function Main() {
  const [waveColor, setWaveColor] = useState(variables.seashell)
  const [containerColor, setContainerColor] = useState(variables.lightseagreen)
  const [options, setOptions] = useState({
    height: {
      min: 15,
      max: 168,
      value: 130,
    },
    sharpness: {
      min: 60,
      max: 100,
      value: 100,
    },
    position: {
      min: 0,
      max: 100,
      value: 20,
    },
  })
  const [numberOfSVG, setNumberOfSVG] = useState(0)
  const svg = createSVGs(options, waveColor)[numberOfSVG]

  return (
    <>
      <S.Header options={options} svg={svg} containerColor={containerColor}>
        <Intro waveColor={waveColor} />
      </S.Header>
      <S.BottomContent waveColor={waveColor}>
        <Controllers
          options={options}
          setOptions={setOptions}
          svg={svg}
          waveColor={waveColor}
          setWaveColor={setWaveColor}
          containerColor={containerColor}
          setContainerColor={setContainerColor}
          numberOfSVG={numberOfSVG}
          setNumberOfSVG={setNumberOfSVG}
        />
      </S.BottomContent>
    </>
  )
}

export default Main
