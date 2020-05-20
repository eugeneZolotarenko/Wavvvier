//@ts-check
import React, { useState } from "react"
import * as S from "./StyleAll"
import Controllers from "./Controllers"
import { variables } from "./../Basics/Styles/GlobalStyles"
import { createSVGs } from "./createSVGs"

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
      </S.Header>
      <S.BottomContent className="iiii" waveColor={waveColor} />
    </>
  )
}

export default Main
