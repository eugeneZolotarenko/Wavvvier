import { TextareaAutosize, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ColorPicker from 'material-ui-color-picker';
import styled from 'styled-components';
import { WaveContainer } from '../helpers/WaveCode';

export const Header = styled.header`
  margin-top: 68px;
  ${(props) => WaveContainer(props.options, props.svg, props.containerColor)};
`;

export const Intro = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vh 3% 20px 3%;
  h2 {
    line-height: 2;
    text-align: center;
    font-size: 28px;
    color: ${(props) => props.theme.seashell};

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
`;

const headerHeight = (props) => props.theme.headerHeight;
const footerHeight = (props) => props.theme.footerHeight;

export const Controllers = styled.section`
  width: 100%;
  min-height: calc(60vh - ${headerHeight} - ${footerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const ControllersWrapper = styled.div`
  padding: 10px 30px 30px 30px;
  background-color: ${(props) => props.theme.seashell};
  width: 45vw;

  @media (max-width: 1200px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 90vw;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    &.pb {
      padding-bottom: 20px;
    }
    &.pt {
      padding-top: 20px;
    }
  }
`;

export const ControllersContent = styled.div`
  padding-top: 10px;
  width: 100%;
  .text-area-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:first-child) {
      margin-top: 40px;
    }
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
        color: ${(props) => props.waveColor};
        width: 1.7em;
        height: 1.7em;
      }
    }
  }
`;

export const PickWaveContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 10px 0;

  overflow-y: auto;

  @media all and (orientation: portrait) {
    max-height: 30vh;
  }

  @media all and (orientation: landscape) {
    max-height: 50vh;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const PickWaveButton = styled.button`
  cursor: pointer;
  height: 120px;
  font-weight: bold;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImagePath});
  background-color: ${(props) => props.theme.seashell};
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-radius: 4px;

  .wave-number {
    color: ${(props) => props.theme.material};
    opacity: 0.9;
    font-size: 6rem;
  }

  &.active {
    background-color: ${(props) => props.theme.material};
    .wave-number {
      color: ${(props) => props.theme.seashell};
    }
  }
`;

export const SliderContainer = styled.div`
  margin-top: 10px;
  .info-star {
    color: #c12020;
    margin-left: 5px;
  }
`;

export const BottomContent = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.waveColor};
`;

export const CustomTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.3rem;
  overflow: auto;
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  flex-wrap: wrap;
  .colors-wrapper {
    margin: 10px 15px 10px 0;
  }
`;

export const CustomColorPicker = styled(ColorPicker)`
  background-color: ${(props) => props.backgroundcolor};
  input {
    width: 40px;
    border: 2px solid #3f51b5;
    cursor: pointer;
  }
`;

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
`;

export const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(22),
    fontFamily: "'Montserrat', sans-serif",
    border: '1px solid #dadde9',
  },
}))(Tooltip);
