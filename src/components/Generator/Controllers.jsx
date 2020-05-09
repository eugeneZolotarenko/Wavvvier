import React, { useState } from "react"
import { Paper, Tabs, Tab, Slider } from "@material-ui/core"
import * as S from "./StylleAll"
import { VanillaCSSWaveCode, HtmlWaveCode } from "./WaveContainer"

function Controllers({ options, setOptions, svg, waveColor, setWaveColor }) {
  console.log(waveColor)
  const [tab, setTab] = useState(0)
  // const [valueHeight, setValueHeight] = useState(options.height)
  // const [valuePosition, setValuePosition] = useState(options.position)

  const input = document.querySelector("input[name='WaveColor']")

  input && input.addEventListener("click", e => e.preventDefault())

  const handleChange = (key, newVal) => {
    setOptions({
      ...options,
      [key]: {
        ...options[key],
        value: newVal,
      },
    })
  }

  return (
    <S.Controllers>
      <Paper square>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newTab) => {
            setTab(newTab)
          }}
        >
          <Tab label="Settings" />
          <Tab label="HTML" />
          <Tab label="CSS" />
        </Tabs>
        <S.ControllersContent>
          {tab === 0 && (
            <div>
              {Object.entries(options).map(([key, option]) => (
                <S.SliderContainer key={key}>
                  <label>{key}</label>
                  <Slider
                    value={option.value}
                    onChange={(e, newVal) => handleChange(key, newVal)}
                    min={option.min}
                    max={option.max}
                  />
                </S.SliderContainer>
              ))}
              <S.CustomColorPicker
                backgroundColor={waveColor}
                name="WaveColor"
                // defaultValue=""
                value={waveColor}
                onChange={color => setWaveColor(color)}
              />
            </div>
          )}
          {tab === 1 && (
            <S.CustomTextareaAutosize
              rowsMax={3}
              marginBottom={true}
              value={HtmlWaveCode}
            />
          )}
          {tab === 2 && (
            <S.CustomTextareaAutosize
              rowsMax={12}
              marginBottom={true}
              value={VanillaCSSWaveCode(options, svg)}
            />
          )}
        </S.ControllersContent>
      </Paper>
    </S.Controllers>
  )
}

export default Controllers
