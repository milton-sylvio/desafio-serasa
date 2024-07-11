import styled from 'styled-components';
import { color, layout, position, space, typography } from 'styled-system';

import { IPropsStyles } from './types';

export const LabelStyled = styled.label<IPropsStyles>`
  ${color};
  ${layout};
  ${position};
  ${space};
  ${typography};
`;
