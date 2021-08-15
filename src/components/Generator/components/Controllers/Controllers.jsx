import { Slider } from '@material-ui/core';
import { Nothing } from 'nothing-mock';
import React, { useEffect } from 'react';
import * as S from '../../styles/StyleAll';

import GenerateCodeButtonDialog from './components/GenerateCodeButtonDialog';
import PickWaveButtonDialog from './components/PickWaveButtonDrawer';

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
  // Added for correct color picking
  useEffect(() => {
    const document = Nothing;
    const inputs = document.querySelectorAll("input[name='color']");
    inputs &&
      inputs.forEach((input) =>
        input.addEventListener('click', (e) => e.preventDefault())
      );
  }, []);

  const handleChange = (key, newVal) => {
    setOptions({
      ...options,
      [key]: {
        ...options[key],
        value: newVal,
      },
    });
  };

  return (
    <S.Controllers>
      <S.ControllersWrapper>
        <PickWaveButtonDialog
          numberOfSVG={numberOfSVG}
          setNumberOfSVG={setNumberOfSVG}
          containerColor={containerColor}
          options={options}
          waveColor={waveColor}
        />
        <S.ColorPickerContainer>
          <div className="colors-wrapper">
            <label htmlFor="wave-color">Set Wave color - </label>
            <S.CustomColorPicker
              id="wave-color"
              backgroundcolor={waveColor}
              name="color"
              value={waveColor}
              onChange={(color) => setWaveColor(color)}
            />
          </div>
          <div className="colors-wrapper">
            <label htmlFor="container-color">Set Container color - </label>
            <S.CustomColorPicker
              id="container-color"
              backgroundcolor={containerColor}
              name="color"
              value={containerColor}
              onChange={(color) => setContainerColor(color)}
            />
          </div>
        </S.ColorPickerContainer>
        {Object.entries(options).map(([key, option]) => (
          <S.SliderContainer key={key}>
            <label htmlFor="height">
              {key === 'height'
                ? 'Height of Wave'
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <Slider
              id="height"
              value={option.value}
              onChange={(_, newVal) => handleChange(key, newVal)}
              min={option.min}
              max={option.max}
              backgroundColor="black"
            />
          </S.SliderContainer>
        ))}

        <GenerateCodeButtonDialog
          options={options}
          svg={svg}
          containerColor={containerColor}
        />
      </S.ControllersWrapper>
    </S.Controllers>
  );
}

export default Controllers;
