function CreateSVG(options, waveColor) {
  function numForSvg(num) {
    const sharper = options.Sharpness.value * 0.01
    return Math.floor(sharper * num)
  }

  let waveColorSvg
  if (waveColor) {
    waveColorSvg = waveColor.replace(/#/g, "%23")
  }

  // prettier-ignore
  return `data:image/svg+xml;utf8,<svg viewBox='0 0 1200  ${numForSvg(134)}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${numForSvg(98.3836)}L50 ${numForSvg(92.3836)}C100 ${numForSvg(86.3836)} 200 ${numForSvg(74.3836)} 300 ${numForSvg(50.3836)}C400 ${numForSvg(26.3836)} 500 ${numForSvg(-9.61644)} 600 ${numForSvg(2.38356)}C700 ${numForSvg(14.3836)} 800 ${numForSvg(74.3836)} 900 ${numForSvg(98.3836)}C1000 ${numForSvg(122.384)} 1100 ${numForSvg(110.384)} 1150 ${numForSvg(104.384)}L1200 ${numForSvg(98.3836)}V134.384H1150C1100 ${numForSvg(134.384)} 1000 ${numForSvg(134.384)} 900 ${numForSvg(134.384)}C800 ${numForSvg(134.384)} 700 ${numForSvg(134.384)} 600 ${numForSvg(134.384)}C500 ${numForSvg(134.384)} 400 ${numForSvg(134.384)} 300 ${numForSvg(134.384)}C200 ${numForSvg(134.384)} 100 ${numForSvg(134.384)} 50 ${numForSvg(134.384)}H0V98.3836Z' fill='${waveColorSvg}'/></svg>`
}

export default CreateSVG
