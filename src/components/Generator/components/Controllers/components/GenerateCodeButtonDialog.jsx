import { FileCopy } from '@material-ui/icons';
import React, { useState } from 'react';
import useClipboard from 'react-use-clipboard';
import * as S from '../../../styles/StyleAll';
import { HtmlWaveCode, VanillaCSSWaveCode } from '../../../helpers/WaveCode';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

function GenerateCodeButtonDialog({ options, svg, containerColor }) {
  const [isCopiedCSS, setCopiedCSS] = useClipboard(
    VanillaCSSWaveCode(options, svg, containerColor),
    { successDuration: 1500 }
  );
  const [isCopiedHTML, setCopiedHTML] = useClipboard(HtmlWaveCode, {
    successDuration: 1500,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="button-wrapper pt">
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Generate Code!
        </Button>
      </div>

      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="copy-code"
      >
        <DialogContent>
          <S.ControllersContent waveColor={containerColor}>
            <div className="text-area-wrapper">
              <button onClick={setCopiedHTML}>
                <FileCopy />{' '}
                <span>{isCopiedHTML ? 'Copppied! 🔥' : 'Copy HTML 💡'}</span>
              </button>
              <S.CustomTextareaAutosize
                rowsMax={2}
                marginBottom={true}
                value={HtmlWaveCode}
              />
            </div>
            <div className="text-area-wrapper">
              <button onClick={setCopiedCSS}>
                <FileCopy />{' '}
                <span>{isCopiedCSS ? 'Copppied! 🔥' : 'Copy CSS 💡'}</span>
              </button>
              <S.CustomTextareaAutosize
                rowsMax={12}
                marginBottom={true}
                value={VanillaCSSWaveCode(options, svg, containerColor)}
              />
            </div>
          </S.ControllersContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default GenerateCodeButtonDialog;
