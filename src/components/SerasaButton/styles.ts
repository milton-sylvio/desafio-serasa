import styled from 'styled-components';
import {
  background,
  border,
  color,
  layout,
  position,
  typography,
} from 'styled-system';

import { IPropsStyles } from './types';

export const ButtonStyled = styled.button<IPropsStyles>`
  ${background};
  ${border};
  ${color};
  ${layout};
  ${position};
  ${typography};

  cursor: pointer;
`;
