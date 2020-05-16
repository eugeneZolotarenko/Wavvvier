import React, { useState } from "react"
import { Nothing } from "nothing-mock"
import useClipboard from "react-use-clipboard"
import { Paper, Tabs, Tab, Slider } from "@material-ui/core"
import { ExpandLess, ExpandMore, FileCopy } from "@material-ui/icons"
import * as S from "./StylleAll"
import { VanillaCSSWaveCode, HtmlWaveCode } from "./WaveCode"

function Controllers({
  options,
  setOptions,
  svg,
  waveColor,
  setWaveColor,
  containerColor,
  setContainerColor,
}) {
  const [tab, setTab] = useState(0)
  const [isVisible, setVisible] = React.useState(true)
  const [isCopiedCSS, setCopiedCSS] = useClipboard(
    VanillaCSSWaveCode(options, svg, containerColor),
    { successDuration: 1500 }
  )
  const [isCopiedHTML, setCopiedHTML] = useClipboard(HtmlWaveCode, {
    successDuration: 1500,
  })

  // Added for correct color pickinig
  const document = Nothing
  const inputs = document.querySelectorAll("input[name='color']")
  inputs &&
    inputs.forEach(input =>
      input.addEventListener("click", e => e.preventDefault())
    )
  //

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
        <S.ControllersContent waveColor={containerColor} isVisible={isVisible}>
          {tab === 0 && (
            <div>
              {Object.entries(options).map(([key, option]) => (
                <S.SliderContainer key={key}>
                  <label>{key === "Height" ? "Height of svg" : key}</label>
                  <Slider
                    value={option.value}
                    onChange={(e, newVal) => handleChange(key, newVal)}
                    min={option.min}
                    max={option.max}
                  />
                </S.SliderContainer>
              ))}
              <S.ColorPickerContainer>
                <div className="colors-wrapper">
                  <label>Set Wave color - </label>
                  <S.CustomColorPicker
                    backgroundcolor={waveColor}
                    name="color"
                    value={waveColor}
                    onChange={color => setWaveColor(color)}
                  />
                </div>
                <div className="colors-wrapper">
                  <label>Set Continer color - </label>
                  <S.CustomColorPicker
                    backgroundcolor={containerColor}
                    name="color"
                    value={containerColor}
                    onChange={color => setContainerColor(color)}
                  />
                </div>
              </S.ColorPickerContainer>
            </div>
          )}
          {tab === 1 && (
            <div className="text-area-wrapper">
              <button onClick={setCopiedHTML}>
                <FileCopy />{" "}
                <span>{isCopiedHTML ? "Copppied! 🔥" : "Copy Code 💡"}</span>
              </button>
              <S.CustomTextareaAutosize
                rowsMax={2}
                marginBottom={true}
                value={HtmlWaveCode}
              />
            </div>
          )}
          {tab === 2 && (
            <div className="text-area-wrapper">
              <button onClick={setCopiedCSS}>
                <FileCopy />{" "}
                <span>{isCopiedCSS ? "Copppied! 🔥" : "Copy Code 💡"}</span>
              </button>
              <S.CustomTextareaAutosize
                rowsMax={12}
                marginBottom={true}
                value={VanillaCSSWaveCode(options, svg, containerColor)}
              />
            </div>
          )}
        </S.ControllersContent>
        <S.ControlToggle onClick={() => setVisible(!isVisible)}>
          {isVisible && (
            <span>
              <ExpandLess /> Hide
            </span>
          )}
          {!isVisible && (
            <span>
              <ExpandMore /> Show
            </span>
          )}
        </S.ControlToggle>
      </Paper>
    </S.Controllers>
  )
}

export default Controllers
