//@ts-check
import React, { useState } from "react"
import * as S from "./StylleAll"
import Controllers from "./Controllers"

function Main() {
  const [options, setOptions] = useState({
    height: {
      min: 60,
      max: 300,
      value: 124,
    },
    position: {
      min: 0,
      max: 100,
      value: 20,
    },
    wide: {
      min: 1,
      max: 0.8,
      value: 1,
    },
  })

  const wider = options.wide.value

  const svg = `data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 ${
    wider * 98.3836
  }L50 ${wider * 92.3836}C100 ${wider * 86.3836} 200 ${wider * 74.3836} 300 ${
    wider * 50.3836
  }C400 ${wider * 26.3836} 500 ${wider * -9.61644} 600 ${wider * 2.38356}C700 ${
    wider * 14.3836
  } 800 ${wider * 74.3836} 900 ${wider * 98.3836}C1000 ${
    wider * 122.384
  } 1100 ${wider * 110.384} 1150 ${wider * 104.384}L1200 ${
    wider * 98.3836
  }V134.384H1150C1100 ${wider * 134.384} 1000 ${wider * 134.384} 900 ${
    wider * 134.384
  }C800 ${wider * 134.384} 700 ${wider * 134.384} 600 ${wider * 134.384}C500 ${
    wider * 134.384
  } 400 ${wider * 134.384} 300 ${wider * 134.384}C200 ${wider * 134.384} 100 ${
    wider * 134.384
  } 50 ${wider * 134.384}H0V98.3836Z' fill='%23454546'/></svg>`

  return (
    <S.Header options={options} svg={svg}>
      <Controllers options={options} setOptions={setOptions} />
    </S.Header>
  )
}

export default Main
