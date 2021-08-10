import { Slider } from "@material-ui/core"
import { FileCopy } from "@material-ui/icons"
import { Nothing } from "nothing-mock"
import React, { useEffect, useState } from "react"
import useClipboard from "react-use-clipboard"
import { createSVGs } from "../helpers/createSVGs"
import * as S from "../styles/StyleAll"
import { HtmlWaveCode, VanillaCSSWaveCode } from "../helpers/WaveCode"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

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
  const [isVisible, setVisible] = useState(true)
  const [isCopiedCSS, setCopiedCSS] = useClipboard(
    VanillaCSSWaveCode(options, svg, containerColor),
    { successDuration: 1500 }
  )
  const [isCopiedHTML, setCopiedHTML] = useClipboard(HtmlWaveCode, {
    successDuration: 1500,
  })

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Added for correct color picking
  useEffect(() => {
    const document = Nothing
    const inputs = document.querySelectorAll("input[name='color']")
    inputs &&
      inputs.forEach(input =>
        input.addEventListener("click", e => e.preventDefault())
      )
  }, [])

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
      <S.ControllersWrapper>
        <S.PickWaveContainer waveColor={containerColor}>
          <span>Pick Wave:</span>
          {createSVGs(options, waveColor).map((_, i) => (
            <button
              className={numberOfSVG === i ? "active" : ""}
              onClick={() => setNumberOfSVG(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </S.PickWaveContainer>
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
            <label>Set Container color - </label>
            <S.CustomColorPicker
              backgroundcolor={containerColor}
              name="color"
              value={containerColor}
              onChange={color => setContainerColor(color)}
            />
          </div>
        </S.ColorPickerContainer>
        {Object.entries(options).map(([key, option]) => (
          <S.SliderContainer key={key}>
            <label>
              {key === "height"
                ? "Height of Wave"
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <Slider
              value={option.value}
              onChange={(_, newVal) => handleChange(key, newVal)}
              min={option.min}
              max={option.max}
              backgroundColor="black"
            />
          </S.SliderContainer>
        ))}

        <div className="button-wrapper">
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Generate Code!
          </Button>
        </div>

        <Dialog
          maxWidth="md"
          fullWidth={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="copy-code"
        >
          <DialogContent>
            <S.ControllersContent
              waveColor={containerColor}
              isVisible={isVisible}
            >
              <div className="text-area-wrapper">
                <button onClick={setCopiedHTML}>
                  <FileCopy />{" "}
                  <span>{isCopiedHTML ? "Copppied! 🔥" : "Copy HTML 💡"}</span>
                </button>
                <S.CustomTextareaAutosize
                  rowsMax={2}
                  marginBottom={true}
                  value={HtmlWaveCode}
                />
              </div>
              <div className="text-area-wrapper">
                <button onClick={setCopiedCSS}>
                  <FileCopy />{" "}
                  <span>{isCopiedCSS ? "Copppied! 🔥" : "Copy CSS 💡"}</span>
                </button>
                <S.CustomTextareaAutosize
                  rowsMax={12}
                  marginBottom={true}
                  value={VanillaCSSWaveCode(options, svg, containerColor)}
                />
              </div>
            </S.ControllersContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </S.ControllersWrapper>
    </S.Controllers>
  )
}

export default Controllers
