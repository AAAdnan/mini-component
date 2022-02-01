/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px"
  }
};

const ProgressBar = ({ value, size }) => {
  return <progress max="100" min="0" value={value} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">{value}</progress>
  ;
  
};

export default ProgressBar;



