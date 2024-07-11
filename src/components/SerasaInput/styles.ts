import styled from 'styled-components';
import { border, color, layout, position } from 'styled-system';

import { IPropsStyles } from './types';

export const InputStyled = styled.input<IPropsStyles>`
  ${border};
  ${color};
  ${layout};
  ${position};

  &.error {
    border-color: red;
  }
`;
