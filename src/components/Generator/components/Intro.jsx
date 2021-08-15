import React from 'react';
import * as S from '../styles/StyleAll';

function Main({ waveColor }) {
  return (
    <S.Intro waveColor={waveColor}>
      <h2>
        Generate wavy dividers for your next project with ease!
        <br />
        Copy HTML/CSS and you are good to go! 🔥
      </h2>
    </S.Intro>
  );
}

export default Main;
