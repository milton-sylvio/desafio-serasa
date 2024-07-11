import styled from 'styled-components';
import {
  border,
  color,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { IPropsStyles, IPropsStyledSystem } from './types';

import StarIcon from '../../assets/star.svg';

export const StarContainer = styled.div<IPropsStyledSystem>`
  ${border};
  ${color};
  ${layout};
  ${position};
  ${space};
  ${typography};
`;

export const Star = styled(StarIcon)<IPropsStyles>`
  ${border};
  ${color};
  ${layout};
  ${position};
  ${space};
  ${typography};

  fill: ${({ fillColor }) => fillColor};

  &.error {
    path {
      stroke: red;
    }
  }

  cursor: pointer;
`;
