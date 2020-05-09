import styled from "styled-components"
import { TextareaAutosize } from "@material-ui/core"
import { WaveContainer } from "./WaveContainer"
import ColorPicker from "material-ui-color-picker"

export const Header = styled.header`
  margin-top: 68px;
  ${props => WaveContainer(props.options, props.svg)};
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
    width: 40%;
    padding: 10px 25px;
    z-index: 1;
    background-color: seashell;
    .MuiTabs-root {
      margin-bottom: 20px;
    }
  }
`
export const ControllersContent = styled.div`
  width: 100%;
`

export const SliderContainer = styled.div`
  margin-top: 10px;
`

export const BottomContent = styled.section`
  width: 100%;
  height: 50vh;
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

export const CustomColorPicker = styled(ColorPicker)`
  background-color: ${props => props.backgroundColor};
  input {
    border: 1px solid lightseagreen;
    cursor: pointer;
  }
`

// For controls =>
// 1. height (as proparty css)
// 2. background-position
// 3. height of svg
// bonus - color
