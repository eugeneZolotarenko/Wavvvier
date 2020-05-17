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
  const SvgArr = [
    `data:image/svg+xml;utf8,<svg viewBox='0 0 1200  ${numForSvg(134)}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${numForSvg(98.3836)}L50 ${numForSvg(92.3836)}C100 ${numForSvg(86.3836)} 200 ${numForSvg(74.3836)} 300 ${numForSvg(50.3836)}C400 ${numForSvg(26.3836)} 500 ${numForSvg(-9.61644)} 600 ${numForSvg(2.38356)}C700 ${numForSvg(14.3836)} 800 ${numForSvg(74.3836)} 900 ${numForSvg(98.3836)}C1000 ${numForSvg(122.384)} 1100 ${numForSvg(110.384)} 1150 ${numForSvg(104.384)}L1200 ${numForSvg(98.3836)}V134.384H1150C1100 ${numForSvg(134.384)} 1000 ${numForSvg(134.384)} 900 ${numForSvg(134.384)}C800 ${numForSvg(134.384)} 700 ${numForSvg(134.384)} 600 ${numForSvg(134.384)}C500 ${numForSvg(134.384)} 400 ${numForSvg(134.384)} 300 ${numForSvg(134.384)}C200 ${numForSvg(134.384)} 100 ${numForSvg(134.384)} 50 ${numForSvg(134.384)}H0V98.3836Z' fill='${waveColorSvg}'/></svg>`,

    `data:image/svg+xml;utf8,<svg viewBox='0 0 1200 ${numForSvg(134)}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${numForSvg(1.98128)}C19.5523 ${numForSvg(3.77347)} 32.2291 ${numForSvg(5.66645)} 51.5 ${numForSvg(9.31693)}C104.5 ${numForSvg(19.3567)} 200 ${numForSvg(43.2681)} 300 ${numForSvg(65.9511)}C400 ${numForSvg(88.634)} 500 ${numForSvg(111.317)} 600 ${numForSvg(102.244)}C700 ${numForSvg(93.1706)} 800 ${numForSvg(53.1829)} 900 ${numForSvg(30.5)}C987.526 ${numForSvg(5.50399)} 1085.36 ${numForSvg(-0.278046)} 1150 ${numForSvg(0.170556)}C1169.54 ${numForSvg(-0.433546)} 1180.49 ${numForSvg(0.660948)} 1200 ${numForSvg(1.98124)}V${numForSvg(134)}H1150C1100 ${numForSvg(134)} 1000 ${numForSvg(134)} 900 ${numForSvg(134)}C800 ${numForSvg(134)} 700 ${numForSvg(134)} 600 ${numForSvg(134)}C500 ${numForSvg(134)} 400 ${numForSvg(134)} 300 ${numForSvg(134)}C200 ${numForSvg(134)} 100 ${numForSvg(134)} 50 ${numForSvg(134)}H0V1.98128Z' fill='${waveColorSvg}'/></svg>`,

    `data:image/svg+xml;utf8,<svg viewBox='0 0 1200 ${numForSvg(134)}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${numForSvg(22.332)}L33 ${numForSvg(19)}C82 ${numForSvg(13.5)} 133 ${numForSvg(14.8889)} 200 ${numForSvg(29.7778)}C267 ${numForSvg(44.6667)} 333 ${numForSvg(67)} 400 ${numForSvg(70.7222)}C467 ${numForSvg(74.4444)} 533 ${numForSvg(59.5556)} 600 ${numForSvg(40.9444)}C667 ${numForSvg(22.3333)} 733 0 800 0C867 0 933 ${numForSvg(22.3333)} 1000 ${numForSvg(29.7778)}C1067 ${numForSvg(37.2222)} 1133 ${numForSvg(29.7778)} 1167 ${numForSvg(26.0556)}L1200 ${numForSvg(22.3333)}V134H1167C1133 ${numForSvg(134)} 1067 ${numForSvg(134)} 1000 ${numForSvg(134)}C933 ${numForSvg(134)} 867 ${numForSvg(134)} 800 ${numForSvg(134)}C733 ${numForSvg(134)} 667 ${numForSvg(134)} 600 ${numForSvg(134)}C533 ${numForSvg(134)} 467 ${numForSvg(134)} 400 ${numForSvg(134)}C333 ${numForSvg(134)} 267 ${numForSvg(134)} 200 ${numForSvg(134)}C133 ${numForSvg(134)} 67 ${numForSvg(134)} 33 ${numForSvg(134)}H0V22.332Z' fill='${waveColorSvg}'/></svg>`,

    `data:image/svg+xml;utf8,<svg viewBox='0 0 1200 ${numForSvg(134)}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${numForSvg(0.0103865)}C22.4434 ${numForSvg(-0.200072)} 28.9842 ${numForSvg(2.61955)} 55 ${numForSvg(24.0085)}C94.1849 ${numForSvg(54.7321)} 121.997 ${numForSvg(57.4523)} 158.5 ${numForSvg(58.0062)}C198.5 ${numForSvg(60.4875)} 200 ${numForSvg(44.6736)} 240 ${numForSvg(52.1175)}C280 ${numForSvg(59.5613)} 320 ${numForSvg(89.3368)} 360 ${numForSvg(89.3368)}C400 ${numForSvg(89.3368)} 440 ${numForSvg(59.5613)} 480 ${numForSvg(54.5988)}C520 ${numForSvg(49.6362)} 560 ${numForSvg(69.4865)} 600 ${numForSvg(84.3742)}C640 ${numForSvg(99.2619)} 680 ${numForSvg(109.187)} 720 ${numForSvg(114.15)}C760 ${numForSvg(119.112)} 800 ${numForSvg(119.112)} 840 ${numForSvg(104.225)}C880 ${numForSvg(89.3368)} 920 ${numForSvg(59.5613)} 960 ${numForSvg(62.0426)}C1000 ${numForSvg(64.5239)} 1040 ${numForSvg(99.2619)} 1080 ${numForSvg(94.2994)}C1120 ${numForSvg(89.3368)} 1127.5 ${numForSvg(59.8287)} 1147.5 ${numForSvg(37.4971)}C1171.48 ${numForSvg(11.8291)} 1185.65 ${numForSvg(0.127628)} 1200 ${numForSvg(0.0103865)}V134H1180C1160 ${numForSvg(134)} 1120 ${numForSvg(134)} 1080 ${numForSvg(134)}C1040 ${numForSvg(134)} 1000 ${numForSvg(134)} 960 ${numForSvg(134)}C920 ${numForSvg(134)} 880 ${numForSvg(134)} 840 ${numForSvg(134)}C800 ${numForSvg(134)} 760 ${numForSvg(134)} 720 ${numForSvg(134)}C680 ${numForSvg(134)} 640 ${numForSvg(134)} 600 ${numForSvg(134)}C560 ${numForSvg(134)} 520 ${numForSvg(134)} 480 ${numForSvg(134)}C440 ${numForSvg(134)} 400 ${numForSvg(134)} 360 ${numForSvg(134)}C320 ${numForSvg(134)} 280 ${numForSvg(134)} 240 ${numForSvg(134)}C200 ${numForSvg(134)} 160 ${numForSvg(134)} 120 ${numForSvg(134)}C80 ${numForSvg(134)} 40 ${numForSvg(134)} 20 ${numForSvg(134)}H0V0.0103865Z' fill='${waveColorSvg}'/></svg>`
  ]

  return SvgArr
}

export default CreateSVG
