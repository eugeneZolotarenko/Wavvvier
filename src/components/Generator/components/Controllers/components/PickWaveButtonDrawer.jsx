import React, { useState } from 'react';

import * as S from '../../../styles/StyleAll';
import { createSVGs } from '../../../helpers/createSVGs';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import wave1 from '../../../../../images/waves/wave-1.svg';
import wave2 from '../../../../../images/waves/wave-2.svg';
import wave3 from '../../../../../images/waves/wave-3.svg';
import wave4 from '../../../../../images/waves/wave-4.svg';

function PickWaveButtonDrawer({
  numberOfSVG,
  setNumberOfSVG,
  containerColor,
  options,
  waveColor,
}) {
  const [open, setOpen] = useState(false);

  const wavesImages = [wave1, wave2, wave3, wave4];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="button-wrapper pb">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Pick Your Wave
        </Button>
      </div>

      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleClose}
        maxHeight="10vh"
        BackdropProps={{ style: { opacity: 0.1 } }}
        size="sm"
      >
        <DialogContent>
          <S.PickWaveContainer>
            {createSVGs(options, waveColor).map((_, i) => (
              <S.PickWaveButton
                waveColor={containerColor}
                backgroundImagePath={wavesImages[i]}
                className={numberOfSVG === i ? 'active' : ''}
                onClick={() => setNumberOfSVG(i)}
                key={i}
              >
                <span className="wave-number">{i + 1}</span>
              </S.PickWaveButton>
            ))}
          </S.PickWaveContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Drawer>
    </>
  );
}

export default PickWaveButtonDrawer;
