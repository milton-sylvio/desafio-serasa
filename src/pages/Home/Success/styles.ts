import styled from 'styled-components';
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import Logo from '../../../assets/logo-serasa.svg';
import CircleCheck from '../../../assets/circle-check.svg';

import { IPropsStyledSystem } from './types';

export const SuccessWrapper = styled.section<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const LogoSerasa = styled(Logo)<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const CircleCheckIcon = styled(CircleCheck)<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const SuccessContainer = styled.div<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};
`;

export const SuccessTxt = styled.div<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const SuccessTitle = styled.h2`
  ${typography};
`;
