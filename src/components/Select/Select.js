import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {

  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <PresentationalBits>
        Hello World { '' }
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalBits>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PresentationalBits = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16} rem;
  padding: 12px 16px;
`;


const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
 `;

export default Select;
