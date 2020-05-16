//@ts-check
import React, { useState } from "react"
import * as S from "./StylleAll"
import Controllers from "./Controllers"
import { Variables } from "./../Basics/Styles/GlobalStyles"
import CreateSVG from "./CreateSVG"

function Main() {
  const [waveColor, setWaveColor] = useState(Variables.seashell)
  const [containerColor, setContainerColor] = useState(Variables.lightseagreen)
  const [options, setOptions] = useState({
    Height: {
      min: 10,
      max: 168,
      value: 130,
    },
    Sharpness: {
      min: 60,
      max: 100,
      value: 100,
    },
    Position: {
      min: 0,
      max: 100,
      value: 20,
    },
  })
  const svg = CreateSVG(options, waveColor)

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
        />
      </S.Header>
      <S.BottomContent className="iiii" waveColor={waveColor}></S.BottomContent>
    </>
  )
}

export default Main
