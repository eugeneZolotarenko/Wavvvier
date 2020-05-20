import styled from "styled-components"
import { TextareaAutosize, Tooltip } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { WaveContainer } from "./WaveCode"
import ColorPicker from "material-ui-color-picker"

export const Header = styled.header`
  margin-top: 68px;
  ${props => WaveContainer(props.options, props.svg, props.containerColor)};
`

export const Controllers = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 40px;
  .MuiPaper-root {
    max-width: 700px;
    min-width: 300px;
    width: 80%;
    padding: 10px 25px 10px 25px;
    z-index: 1;
    background-color: rgba(255, 245, 238, 0.85);
    .MuiTabs-root {
      margin-bottom: 20px;
    }
  }
`
export const ControllersContent = styled.div`
  width: 100%;
  display: ${props => (props.isVisible ? "block" : "none")};
  .text-area-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      cursor: pointer;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      padding: 5px;
      margin: 0 0 10px 0;
      span {
        padding-left: 10px;
      }
      svg {
        color: ${props => props.waveColor};
        width: 1.7em;
        height: 1.7em;
      }
    }
  }
`

export const PickWaveContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  button {
    margin-left: 10px;
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.54);
  }
  .active {
    color: ${props => props.waveColor};
  }
`

export const SliderContainer = styled.div`
  margin-top: 10px;
  .info-star {
    color: #c12020;
    margin-left: 5px;
  }
`

export const BottomContent = styled.section`
  width: 100%;
  height: 40vh;
  background-color: ${props => props.waveColor};
`

export const CustomTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-family: "Source Code Pro", monospace;
  font-size: 1.3rem;
  overflow: auto;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  flex-wrap: wrap;
  .colors-wrapper {
    margin: 15px 15px 0 0;
  }
`

export const CustomColorPicker = styled(ColorPicker)`
  background-color: ${props => props.backgroundcolor};
  input {
    width: 40px;
    border: 2px solid #3f51b5;
    cursor: pointer;
  }
`

export const ControlToggle = styled.div`
  padding: 10px 0 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  cursor: pointer;
  margin-top: 20px;
  > span {
    color: rgba(0, 0, 0, 0.54);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(22),
    fontFamily: "'Montserrat', sans-serif",
    border: "1px solid #dadde9",
  },
}))(Tooltip)
