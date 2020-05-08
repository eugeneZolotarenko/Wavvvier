import React, { useState } from "react"
import { Paper, Tabs, Tab, Slider, Checkbox } from "@material-ui/core"
import * as S from "./StylleAll"

function Controllers({ options, setOptions }) {
  console.log(Object.entries(options))
  const [tab, setTab] = useState(0)
  // const [valueHeight, setValueHeight] = useState(options.height)
  // const [valuePosition, setValuePosition] = useState(options.position)

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
      <Paper square>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newTab) => {
            setTab(newTab)
          }}
        >
          <Tab label="Settings" />
          <Tab label="HTML" />
          <Tab label="CSS" />
        </Tabs>
        {Object.entries(options).map(([key, option]) => (
          <Slider
            value={option.value}
            onChange={(e, newVal) => handleChange(key, newVal)}
            min={option.min}
            max={option.max}
          />
        ))}
      </Paper>
    </S.Controllers>
  )
}

export default Controllers
