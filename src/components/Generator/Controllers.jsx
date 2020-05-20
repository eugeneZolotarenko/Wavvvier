import React, { useState, useEffect } from "react"
import { Nothing } from "nothing-mock"
import useClipboard from "react-use-clipboard"
import { Paper, Tabs, Tab, Slider } from "@material-ui/core"
import { ExpandLess, ExpandMore, FileCopy, Star } from "@material-ui/icons"
import * as S from "./StyleAll"
import { VanillaCSSWaveCode, HtmlWaveCode } from "./WaveCode"
import { createSVGs } from "./createSVGs"

function Controllers({
  options,
  setOptions,
  svg,
  waveColor,
  setWaveColor,
  containerColor,
  setContainerColor,
  numberOfSVG,
  setNumberOfSVG,
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
  useEffect(() => {
    const document = Nothing
    const inputs = document.querySelectorAll("input[name='color']")
    inputs &&
      inputs.forEach(input =>
        input.addEventListener("click", e => e.preventDefault())
      )
  }, [])
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

  const tooltipText =
    "In CSS you can see, that mobile-version value was adjusted to be half of original."

  return (
    <S.Controllers>
      <Paper square>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newTab) => {
            setVisible(true)
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
              <S.PickWaveContainer waveColor={containerColor}>
                <span>Pick Wave:</span>
                {createSVGs(options, waveColor).map((svg, i) => (
                  <button
                    className={numberOfSVG === i ? "active" : ""}
                    onClick={() => setNumberOfSVG(i)}
                    key={i}
                  >
                    {i + 1}
                  </button>
                ))}
              </S.PickWaveContainer>
              {Object.entries(options).map(([key, option]) => (
                <S.SliderContainer key={key}>
                  <label>
                    {key === "height"
                      ? "Height of svg"
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {key === "Height" && (
                    <S.HtmlTooltip
                      title={tooltipText}
                      className="tooltip"
                      placement="right"
                      classes={{ tooltip: { maxWidth: 700 } }}
                    >
                      <Star className="info-star" />
                    </S.HtmlTooltip>
                  )}
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
