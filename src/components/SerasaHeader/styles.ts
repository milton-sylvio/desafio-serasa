import styled from 'styled-components';
import { background, color, flexbox, layout, position } from 'styled-system';

import { IPropsStyles } from './types';

export const HeaderStyled = styled.header<IPropsStyles>`
  ${background};
  ${color};
  ${flexbox};
  ${layout};
  ${position};
`;
